from pydantic import BaseModel


class Error(BaseModel):
    message: str


class DuplicateUserError(ValueError):
    pass


class UserDoesNotExistError(ValueError):
    pass
