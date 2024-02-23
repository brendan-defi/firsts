from pydantic import BaseModel
from datetime import datetime


class UserForm(BaseModel):
    username: str
    password: str

    def generate_hashed_password(self):
        return self.password


class UserIn(BaseModel):
    username: str
    hashed_password: str
    created_at: datetime
    updated_at: datetime


class UserOut(BaseModel):
    id: int
    username: str


class UserOutWithHashedPassword(UserOut):
    hashed_password: str
