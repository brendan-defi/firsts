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
from models.children import (
    ChildFormData,
    ChildIn,
    ChildOut
)
from queries.children import ChildrenQueries


router = APIRouter()


@router.post(
    "/api/children",
    response_model=ChildOut | None
)
def create_child(
    user_id: int,
    relationship_type_id: int,
    form_submission: ChildFormData,
    repo: ChildrenQueries = Depends(),
) -> ChildOut | Error:
    new_child_data = ChildIn(
        firstname=form_submission.firstname,
        lastname=form_submission.lastname,
        date_of_birth=form_submission.date_of_birth,
        gender_id=form_submission.gender_id,
        created_at=datetime.now(tz=ZoneInfo("GMT")),
        updated_at=datetime.now(tz=ZoneInfo("GMT"))
    )
    try:
        new_child = repo.create(user_id, relationship_type_id, new_child_data)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    if not isinstance(new_child, ChildOut):
        return Error(
            message="Could not create new child."
        )
    return new_child


@router.get(
    "/api/children/{child b_id}",
    response_model=ChildOut | None
)
def get_single_child_detail(
    child_id: int,
    repo: ChildrenQueries = Depends(),
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
