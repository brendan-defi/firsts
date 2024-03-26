from fastapi import (
    APIRouter,
    Depends,
    status,
    HTTPException,
    # Request,
    # Response,
)

from authenticator import authenticator
from models.helper_functions.prep_form_data_for_account_creation \
    import prep_form_data_for_account_creation
from models.helper_functions.data_to_user_data_for_account_update \
    import data_to_user_data_for_account_update
from models.errors import (
    Error,
)
from models.users import (
    UserFormForAccountCreation,
    UserFormForAccountUpdate,
    UserOut,
    UserOutWithAllInfo,
    UserOutWithHashedPassword
)
from queries.users import UsersQueries
from utils.helper_functions.validate_authorized_user \
    import validate_authorized_user


router = APIRouter()


@router.post("/api/users", response_model=UserOut | Error)
def create_user(
    form_submission: UserFormForAccountCreation,
    repo: UsersQueries = Depends(),
) -> UserOutWithHashedPassword | Error:
    new_user_data = prep_form_data_for_account_creation(form_submission)
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
    user_data: UserOut = Depends(authenticator.get_current_user)
):
    """
    This method takes form data that the user submits and updates the user.
    This method updates all data fields for a given user. So when calling
    this method, developer should provide all existing information that exists.
    Failing to provide information will result in accidental data deletion.
    """
    validate_authorized_user(id, user_data.id)
    updated_user_data = data_to_user_data_for_account_update(form_data)
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
