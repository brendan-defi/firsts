from pydantic import BaseModel
from datetime import datetime


class UserForm(BaseModel):
    email: str
    password: str

    def generate_hashed_password(self):
        pass


class UserIn(BaseModel):
    email: str
    hashed_password: str
    created_at: datetime
    updated_at: datetime


class UserOut(BaseModel):
    id: int
    email: str


class UserOutWithHashedPassword(UserOut):
    hashed_password: str
