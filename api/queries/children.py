from fastapi import HTTPException, status
from models.helper_functions.data_to_childout import data_to_childout
from models.errors import (
    ChildDoesNotExistError,
    Error,
)
from models.children import (
    ChildFormData,
    ChildIn,
    ChildOut
)
from queries.connection_pool import pool


class ChildrenQueries:
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
                    return data_to_childout(result_data)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=str(e),
            )

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
                    return data_to_childout(result_data)
        except Exception as e:
            return Error(
                message="New child creation query failed.",
                detail=str(e),
            )

    def update(
        self,
        child_id: int,
        updated_child_data: ChildFormData,
    ) -> ChildOut | Error:
        if not self.get_child_by_id(child_id):
            raise ChildDoesNotExistError(
                "Could not update child."
            )
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        UPDATE children
                        SET
                            firstname = %s,
                            lastname = %s,
                            date_of_birth = %s,
                            gender_id = %s,
                            updated_at = NOW()
                        WHERE id = %s
                        RETURNING *;
                        """,
                        [
                            updated_child_data.firstname,
                            updated_child_data.lastname,
                            updated_child_data.date_of_birth,
                            updated_child_data.gender_id,
                            child_id
                        ]
                    )
                    result_data = result.fetchone()
                    if not result_data:
                        return Error(
                            message="Update child query failed."
                        )
                    return data_to_childout(result_data)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=str(e),
            )
