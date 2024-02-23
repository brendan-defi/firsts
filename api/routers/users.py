from datetime import datetime
from zoneinfo import ZoneInfo
from fastapi import (
    APIRouter,
    Depends,
    status,
    HTTPException,
    Request,
    Response,
)
from models.errors import (
    Error,
)
from models.users import (
    UserForm,
    UserIn,
    UserOut,
    UserOutWithHashedPassword
)
from queries.users import UsersQueries


router = APIRouter()


@router.post("/api/users", response_model=UserOut|Error)
def create_user(
    form_submission: UserForm,
    repo: UsersQueries = Depends(),
) -> UserOutWithHashedPassword|Error:
    new_user_in = UserIn(
        username=form_submission.username,
        hashed_password=form_submission.generate_hashed_password(),
        created_at=datetime.now(tz=ZoneInfo("GMT")),
        updated_at=datetime.now(tz=ZoneInfo("GMT"))
    )
    try:
        new_user = repo.create(new_user_in)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="failed to create " + str(e)
        )
    if not isinstance(new_user, UserOutWithHashedPassword):
        return Error(
            message="Could not create new user."
        )
    return new_user
