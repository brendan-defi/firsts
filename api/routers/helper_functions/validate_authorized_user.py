from fastapi import HTTPException, status

def validate_authorized_user(
    user_id: int,
    logged_in_user_id: int
):
    if user_id != logged_in_user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Unauthorized user"
        )
