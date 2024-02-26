from fastapi import HTTPException, status
from .helper_functions.result_to_childout import result_to_childout
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
                    return result_to_childout(result_data)
        except Exception as e:
            return Error(
                message="New child creation query failed.",
                detail=str(e),
            )

    def get_child_by_id(
        self,
        child_id: int
    ) -> ChildOut | Error:
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
                        return Error(
                            message="Could not find child."
                        )
                    return result_to_childout(result_data)
        except Exception as e:
            return Error(
                message="New child creation query failed.",
                detail=str(e),
            )
