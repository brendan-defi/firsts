from fastapi import HTTPException, status
from models.errors import (
    DuplicateUserError,
    Error,
)
from models.users import (
    UserIn,
    UserOut,
    UserOutWithHashedPassword,
)
from queries.connection_pool import pool


class UsersQueries:
    def get_user_by_username(
        self,
        username: str
    ) -> UserOut|None:
        """
        Queries the database for a user with the provided username.
        If a user exists with that username, the user entity is returned as a UserOut object.
        If a user does not exist with that username, raise an HTTPException with a 400 Status.
        """
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, username
                        FROM users
                        WHERE username = %s;
                        """,
                        [username]
                    )
                    result_data = result.fetchone()
                    print("result data: ", result_data)
                    if not result_data:
                        return None
                    user = UserOut(
                        id=result_data[0],
                        username=result_data[1]
                    )
                    return user
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=str(e),
            )

    def create(
        self,
        new_user_data: UserIn
    ) -> UserOutWithHashedPassword|Error:
        """
        Queries the database to create a new user from the provided form data.
        First checks to see if a user already exists with the provided username. If one does, returns a DuplicateUserError.
        If no user exists with that username, attempts to create the new user.
        If successful, returns a UserOutWithHashedPassword object.
        """
        user_with_provided_username = self.get_user_by_username(new_user_data.username)
        if isinstance(user_with_provided_username, UserOut):
            print("duplicate user exists")
            raise DuplicateUserError(
                "Could not create new user."
            )
        print("got here")
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO users
                            (username, password, created_at, updated_at)
                        VALUES
                            (%s, %s, %s, %s)
                        RETURNING id, username, password;
                        """,
                        [
                            new_user_data.username,
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
                        username=result_data[1],
                        hashed_password=result_data[2]
                    )
                    return new_user
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="You got here" + str(e),
            )
