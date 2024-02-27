from fastapi import HTTPException, status
from models.helper_functions.data_to_userout \
    import data_to_userout
from models.helper_functions.data_to_useroutwithhashedpassword \
    import data_to_user_out_with_hashed_password
from models.helper_functions.data_to_user_out_with_all_info \
    import data_to_user_out_with_all_info
from models.errors import (
    DuplicateUserError,
    Error,
    UserDoesNotExistError,
)
from models.users import (
    UserDataForAccountCreation,
    UserDataForAccountUpdate,
    UserOut,
    UserOutWithAllInfo,
    UserOutWithHashedPassword,
)
from queries.connection_pool import pool


class UsersQueries:
    def get_user_by_username(
        self,
        username: str
    ) -> UserOut | None:
        """
        Queries the database for a user with the provided username.
        If a user exists with that username, the user entity is returned as a
        UserOut object.
        If a user does not exist with that username, raise an HTTPException
        with a 400 Status.
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
                    if not result_data:
                        return None
                    return data_to_userout(result_data)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=str(e),
            )

    def get_user_by_id(
        self,
        user_id: int
    ) -> UserOut | None:
        """
        Queries the database for a user with the provided user_id.
        If a user exists with that user_id, the user entity is returned as a
        UserOut object.
        If a user does not exist with that user_id, raise an HTTPException
        with a 400 Status.
        """
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, username
                        FROM users
                        WHERE id = %s;
                        """,
                        [user_id]
                    )
                    result_data = result.fetchone()
                    if not result_data:
                        return None
                    return data_to_userout(result_data)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=str(e),
            )

    def create(
        self,
        new_user_data: UserDataForAccountCreation
    ) -> UserOutWithHashedPassword | Error:
        """
        Queries the database to create a new user from the provided form data.
        First checks to see if a user already exists with the provided
        username. If one does, returns a DuplicateUserError.
        If no user exists with that username, attempts to create the new user.
        If successful, returns a UserOutWithHashedPassword object.
        """
        user_with_provided_username = self.get_user_by_username(
            new_user_data.username
        )
        if isinstance(user_with_provided_username, UserOut):
            raise DuplicateUserError(
                "Could not create new user."
            )
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
                    return data_to_user_out_with_hashed_password(result_data)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=str(e),
            )

    def update(
        self,
        user_id: int,
        updated_user_data: UserDataForAccountUpdate,
    ) -> UserOutWithAllInfo | Error:
        if not self.get_user_by_id(user_id):
            raise UserDoesNotExistError(
                "Could not update user."
            )
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        UPDATE users
                        SET
                            username = %s,
                            firstname = %s,
                            lastname = %s,
                            updated_at = %s
                        WHERE id = %s
                        RETURNING
                            id,
                            username,
                            firstname,
                            lastname,
                            created_at,
                            updated_at,
                            deleted_at;
                        """,
                        [
                            updated_user_data.username,
                            updated_user_data.firstname,
                            updated_user_data.lastname,
                            updated_user_data.updated_at,
                            user_id
                        ]
                    )
                    result_data = result.fetchone()
                    if not result_data:
                        return Error(
                            message="Update user query failed."
                        )
                    return data_to_user_out_with_all_info(result_data)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=str(e),
            )
