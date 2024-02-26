from pydantic import BaseModel


class Error(BaseModel):
    message: str
    detail: str | None = None


class DuplicateUserError(ValueError):
    pass


class UserDoesNotExistError(ValueError):
    pass
