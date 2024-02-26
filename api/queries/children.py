from fastapi import HTTPException, status
from models.errors import (
    DuplicateUserError,
    Error,
    UserDoesNotExistError,
)
from models.children import (
    ChildFormData,
    ChildIn,
    ChildOut
)
from queries.connection_pool import pool


class ChildrenQueries:
    def create(
        self,
        user_id: int,
        relationship_type_id: int,
        new_child_data: ChildIn
    ) -> ChildOut | Error:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        WITH inserted_child as (
                            INSERT INTO children
                                (
                                    firstname,
                                    lastname,
                                    date_of_birth,
                                    gender_id,
                                    created_at,
                                    updated_at
                                )
                            VALUES
                                (
                                    %s,
                                    %s,
                                    %s,
                                    %s,
                                    %s,
                                    %s
                                )
                            RETURNING *
                        ), user_child_relationship as (
                            INSERT INTO junction_users_children
                                (
                                    user_id,
                                    child_id,
                                    relationship_type_id,
                                    is_primary_relationship,
                                    created_at,
                                    updated_at
                                )
                            SELECT
                                    %s,
                                    inserted_child.id,
                                    %s,
                                    TRUE,
                                    inserted_child.created_at,
                                    inserted_child.updated_at
                            FROM inserted_child
                        )

                        SELECT * from inserted_child;
                        """,
                        [
                            new_child_data.firstname,
                            new_child_data.lastname,
                            new_child_data.date_of_birth,
                            new_child_data.gender_id,
                            new_child_data.created_at,
                            new_child_data.updated_at,
                            user_id,
                            relationship_type_id
                        ]
                    )
                    result_data = result.fetchone()
                    if not result_data:
                        return Error(
                            message="New child creation query failed."
                        )
                    new_child = ChildOut(
                        id=result_data[0],
                        firstname=result_data[1],
                        lastname=result_data[2],
                        date_of_birth=result_data[3],
                        gender_id=result_data[4],
                        created_at=result_data[5],
                        updated_at=result_data[6],
                        deleted_at=result_data[7]
                    )
                    return new_child
        except Exception as e:
            return Error(
                message="New child creation query failed.",
                detail=str(e),
            )

    def get_child_by_id(
        self,
        child_id: int
    ) -> ChildOut | None:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            id,
                            firstname,
                            lastname,
                            date_of_birth,
                            gender_id,
                            created_at,
                            updated_at,
                            deleted_at
                        FROM children
                        WHERE 1=1
                            AND id = %s
                        ;
                        """,
                        [child_id]
                    )
                    result_data = result.fetchone()
                    if not result_data:
                        return None
                    child = ChildOut(
                        id=result_data[0],
                        firstname=result_data[1],
                        lastname=result_data[2],
                        date_of_birth=result_data[3],
                        gender_id=result_data[4],
                        created_at=result_data[5],
                        updated_at=result_data[6],
                        deleted_at=result_data[7]
                    )
                    return child
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=str(e),
            )
