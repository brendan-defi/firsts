from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, HTTPException, Response, Request, status
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import jwt, JWTError
from passlib.context import CryptContext

from utils.constants import HASHING_ALGO, SIGNING_KEY
from models.auth import Token
from models.users import UserFormForAccountCreation, UserDataForAccountCreation
from queries.users import UsersQueries


bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_bearer = OAuth2PasswordBearer(tokenUrl="authenticator/token")


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

    def hash_password(self, password: str) -> str:
        return bcrypt_context.hash(password)

    def authenticate_user(
            self,
            username: str,
            password: str,
        ):
        user_account = self.users_queries.get_user_by_username(username)
        if not user_account:
            return None
        if not self.cryptography_context.verify(
            password,
            user_account.hashed_password
        ):
            return None
        return user_account

    def create_access_token(self, username: str, user_id: int, session_duration: timedelta):
        expires = datetime.utcnow() + session_duration
        jwt_data = {
            "sub": username,
            "id": user_id,
            "exp": expires,
        }
        return jwt.encode(jwt_data, self.signing_key, self.hashing_algo)

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
        return Token(access_token=token, token_type="bearer")





    async def logout(self):
        pass

    @property
    def router(self):
        if self._router == None:
            router = APIRouter()
            router.post(f"/{self.path}", response_model=Token)(self.login)
            router.delete(f"/{self.path}", response_model=Token)(self.logout)
            self._router = router
        return self._router


authenticator = Authenticator(
    SIGNING_KEY,
    HASHING_ALGO,
    UsersQueries(),
)
