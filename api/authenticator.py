from datetime import datetime, timedelta, timezone
from fastapi import APIRouter, Cookie, Depends, HTTPException, Response, Request, status
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import jwt, JWTError
from passlib.context import CryptContext

from utils.constants import HASHING_ALGO, SIGNING_KEY
from models.auth import Token
from models.users import UserOut, UserOutWithHashedPassword
from queries.users import UsersQueries


oauth2_bearer = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)


class Authenticator():
    def __init__(
        self,
        signing_key: str,
        hashing_algo: str,
        users_queries: UsersQueries,
        cookie_name: str = "fastapi_token",
        path: str = "token",
        exp: timedelta = timedelta(hours=168),
    ):
        self.signing_key = signing_key
        self.hashing_algo = hashing_algo
        self.cookie_name = cookie_name
        self.path = path
        self.exp = exp
        self._router = None
        self.cryptography_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
        self.users_queries = users_queries

    # Auth Routes
    @property
    def router(self):
        if self._router == None:
            router = APIRouter()
            router.post(f"/{self.path}", response_model=Token)(self.login)
            router.delete(f"/{self.path}", response_model=bool)(self.logout)
            self._router = router
        return self._router

    async def login(
        self,
        response: Response,
        request: Request,
        form: OAuth2PasswordRequestForm = Depends(),
    ):
        user_account = self.authenticate_user(form.username, form.password)
        if not user_account:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        token = self.create_access_token(
            user_account.username,
            user_account.id,
            timedelta(days=14)
        )
        self.create_user_cookie(token, request, response)
        return Token(access_token=token, token_type="bearer")

    async def logout(
        self,
        request: Request,
        response: Response
    ):
        samesite, secure = self._get_cookie_settings(request)
        response.delete_cookie(
            key=self.cookie_name,
            httponly=True,
            samesite=samesite,
            secure=secure,
        )
        return True

    # Helper Functions
    def hash_password(self, password: str) -> str:
        return self.cryptography_context.hash(password)

    def authenticate_user(
            self,
            username: str,
            password: str,
        ) -> UserOutWithHashedPassword | None:
        user_account = self.users_queries.get_user_by_username(username)
        if not user_account:
            return None
        if not self.cryptography_context.verify(
            password,
            user_account.hashed_password
        ):
            return None
        return user_account

    def create_access_token(
            self,
            username: str,
            user_id: int,
            session_duration: timedelta
        ) -> str:
        expires = datetime.now(timezone.utc) + session_duration
        jwt_data = {
            "sub": username,
            "id": user_id,
            "exp": expires,
        }
        return jwt.encode(jwt_data, self.signing_key, self.hashing_algo)

    async def get_current_user(
        self,
        request: Request,
        bearer_token: str | None = Depends(oauth2_bearer)
    ) -> UserOut:
        cookie_token: str | None = request.cookies.get(self.cookie_name)
        token_to_decode = cookie_token if cookie_token else bearer_token
        if not token_to_decode:
            raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Could not validate user",
                )
        try:
            payload = jwt.decode(
                token_to_decode,
                self.signing_key,
                self.hashing_algo
            )
            username = payload.get("sub")
            user_id = payload.get("id")
            if not username or not user_id:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Could not validate user",
                )
            return UserOut(id=user_id, username=username)
        except JWTError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Could not validate user",
            )

    def _get_cookie_settings(self, request: Request):
        headers = request.headers
        if "origin" in headers and "localhost" in headers["origin"]:
            samesite = "lax"
            secure = False
        else:
            samesite = "none"
            secure = True
        return samesite, secure

    def create_user_cookie(
        self,
        encoded_jwt: str,
        request: Request,
        response: Response,
    ):
        samesite, secure = self._get_cookie_settings(request)
        response.set_cookie(
            key=self.cookie_name,
            value=encoded_jwt,
            httponly=True,
            samesite=samesite,
            secure=secure,
        )


authenticator = Authenticator(
    SIGNING_KEY,
    HASHING_ALGO,
    UsersQueries(),
)
