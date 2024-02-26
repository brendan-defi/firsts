steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS junction_users_children (
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            child_id INTEGER NOT NULL REFERENCES children(id) ON DELETE CASCADE,
            relationship_type_id INTEGER NOT NULL REFERENCES relationship_types(id) ON DELETE RESTRICT,
            is_primary_relationship BOOLEAN NOT NULL DEFAULT FALSE,
            created_at TIMESTAMPTZ NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL,
            deleted_at TIMESTAMPTZ,
            PRIMARY KEY (user_id, child_id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS juction_users_children;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE UNIQUE INDEX unique_user_child_primary_relationship
        ON junction_users_children (child_id)
        WHERE is_primary_relationship = TRUE;
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS unique_user_child_primary_relationship;
        """,
    ]
]
