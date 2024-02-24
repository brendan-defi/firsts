from datetime import datetime
from zoneinfo import ZoneInfo
from fastapi import (
    APIRouter,
    Depends,
    status,
    HTTPException,
    # Request,
    # Response,
)
from models.errors import (
    Error,
)
from models.users import (
    UserFormForAccountCreation,
    UserFormForAccountUpdate,
    UserDataForAccountCreation,
    UserDataForAccountUpdate,
    UserOut,
    UserOutWithAllInfo,
    UserOutWithHashedPassword
)
from queries.users import UsersQueries


router = APIRouter()


@router.post("/api/users", response_model=UserOut | Error)
def create_user(
    form_submission: UserFormForAccountCreation,
    repo: UsersQueries = Depends(),
) -> UserOutWithHashedPassword | Error:
    new_user_data = UserDataForAccountCreation(
        username=form_submission.username,
        hashed_password=form_submission.generate_hashed_password(),
        created_at=datetime.now(tz=ZoneInfo("GMT")),
        updated_at=datetime.now(tz=ZoneInfo("GMT"))
    )
    try:
        new_user = repo.create(new_user_data)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    if not isinstance(new_user, UserOutWithHashedPassword):
        return Error(
            message="Could not create new user."
        )
    return new_user


@router.put("/api/users/{id}", response_model=UserOutWithAllInfo | Error)
def update_user(
    id: int,
    form_data: UserFormForAccountUpdate,
    repo: UsersQueries = Depends(),
):
    """
    This method takes form data that the user submits and updates the user.
    This method updates all data fields for a given user. So when calling
    this method, developer should provide all existing information that exists.
    Failing to provide information will result in accidental data deletion.
    """
    updated_user_data = UserDataForAccountUpdate(
        username=form_data.username,
        first_name=form_data.first_name,
        last_name=form_data.last_name,
        updated_at=datetime.now(tz=ZoneInfo("GMT")),
    )
    try:
        updated_user = repo.update(id, updated_user_data)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    if not isinstance(updated_user, UserOutWithAllInfo):
        return Error(
            message="Could not update user."
        )
    return updated_user
