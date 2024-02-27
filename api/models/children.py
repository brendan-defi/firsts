from pydantic import BaseModel
from datetime import date, datetime


class ChildFormData(BaseModel):
    firstname: str
    lastname: str | None
    date_of_birth: date | None
    gender_id: int | None


class ChildIn(ChildFormData):
    created_at: datetime
    updated_at: datetime


class ChildOut(ChildIn):
    id: int
    deleted_at: datetime | None
