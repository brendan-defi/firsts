from pydantic import BaseModel
from datetime import datetime


class UserFormForAccountCreation(BaseModel):
    username: str
    password: str

    def generate_hashed_password(self):
        return self.password


class UserFormForAccountUpdate(BaseModel):
    username: str | None = None
    first_name: str | None = None
    last_name: str | None = None


class UserDataForAccountCreation(BaseModel):
    username: str
    hashed_password: str
    created_at: datetime
    updated_at: datetime


class UserDataForAccountUpdate(UserFormForAccountUpdate):
    updated_at: datetime


class UserOut(BaseModel):
    id: int
    username: str


class UserOutWithAllInfo(UserOut):
    first_name: str
    last_name: str
    created_at: datetime
    updated_at: datetime
    deleted_at: datetime | None


class UserOutWithHashedPassword(UserOut):
    hashed_password: str
