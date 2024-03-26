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

from authenticator import authenticator
from models.errors import (
    Error,
)
from models.children import (
    ChildFormData,
    ChildIn,
    ChildOut
)
from models.users import UserOut
from routers.helper_functions.validate_authorized_user \
    import validate_authorized_user
from queries.children import ChildrenQueries


router = APIRouter()


@router.post(
    "/api/children",
    response_model=ChildOut | Error
)
def create_child(
    user_id: int,
    relationship_type_id: int,
    form_submission: ChildFormData,
    repo: ChildrenQueries = Depends(),
    user_data: UserOut = Depends(authenticator.get_current_user)
):
    validate_authorized_user(user_id, user_data.id)
    new_child_data = ChildIn(
        firstname=form_submission.firstname,
        lastname=form_submission.lastname,
        date_of_birth=form_submission.date_of_birth,
        gender_id=form_submission.gender_id,
        created_at=datetime.now(tz=ZoneInfo("GMT")),
        updated_at=datetime.now(tz=ZoneInfo("GMT"))
    )
    try:
        result = repo.create(user_id, relationship_type_id, new_child_data)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    return result


@router.get(
    "/api/children/{child_id}",
    response_model=ChildOut | Error
)
def get_single_child_detail(
    child_id: int,
    repo: ChildrenQueries = Depends(),
    user_data: UserOut = Depends(authenticator.get_current_user)
):
    try:
        child = repo.get_child_by_id(child_id)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    if not isinstance(child, ChildOut):
        return Error(
            message="Could not find child."
        )
    return child


@router.put(
    "/api/children/{child_id}",
    response_model=ChildOut | Error
)
def update_child(
    child_id: int,
    form_submission: ChildFormData,
    repo: ChildrenQueries = Depends(),
    user_data: UserOut = Depends(authenticator.get_current_user)
):
    child_owner = repo.get_userid_of_childs_primary_relationship(child_id)
    if not child_owner or child_owner.id != user_data.id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Unable to update child."
        )
    try:
        result = repo.update(child_id, form_submission)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    return result
