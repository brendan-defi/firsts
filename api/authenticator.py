from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import jwt, JWTError
from passlib.context import CryptContext

from utils.constants import HASHING_ALGO, SIGNING_KEY
from models.auth import Token
from models.users import UserFormForAccountCreation, UserDataForAccountCreation


router = APIRouter(
    prefix="/auth",
    tags=["auth"],
)
bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_bearer = OAuth2PasswordBearer(tokenUrl="authenticator/token")


class Authenticator():
    def __init__(
        self,
        signing_key: str,
        hashing_algo: str,
        cookie_name: str = "fastapi_token",
        path: str = "token",
        exp: timedelta = timedelta(hours=168)
    ):
        self.signing_key = signing_key
        self.hashing_algo = hashing_algo
        self.cookie_name = cookie_name
        self.path = path
        self.exp = exp

    def hash_password(self, password: str) -> str:
        return bcrypt_context.hash(password)


authenticator = Authenticator(
    SIGNING_KEY,
    HASHING_ALGO
)
