from fastapi import HTTPException, status
from models.errors import (
    Error,
)
from models.users import (
    UserIn,
    UserOutWithHashedPassword,
)
from queries.connection_pool import pool


class UsersQueries:
    def create(
        self,
        new_user_data: UserIn,

    ) -> UserOutWithHashedPassword | Error:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO users
                        (email, password, created_at, updated_at)
                    VALUES
                        (%s, %s, %s, %s)
                    RETURNING id, email, password
                    """,
                    [
                        new_user_data.email,
                        new_user_data.hashed_password,
                        new_user_data.created_at,
                        new_user_data.updated_at,
                    ]
                )
                result_data = result.fetchone()
                if not result_data:
                    return Error(
                        message="New user creation query failed."
                    )
                new_user = UserOutWithHashedPassword(
                    id=result_data[0],
                    email=result_data[1],
                    hashed_password=result_data[2]
                )
                return new_user
