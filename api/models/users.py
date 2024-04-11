from pydantic import BaseModel
from datetime import datetime


class UserFormForAccountCreation(BaseModel):
    username: str
    password: str

    # def generate_hashed_password(self):
    #     return self.password


class UserFormForAccountUpdate(BaseModel):
    username: str | None = None
    firstname: str | None = None
    lastname: str | None = None
    completed_nux: bool | None = None


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
    firstname: str | None
    lastname: str | None
    completed_nux: bool | None
    created_at: datetime
    updated_at: datetime
    deleted_at: datetime | None


class UserOutWithHashedPassword(UserOut):
    hashed_password: str
