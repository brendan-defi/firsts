steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS junction_users_children (
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            child_id INTEGER NOT NULL REFERENCES children(id) ON DELETE CASCADE,
            relationship_type_id INTEGER NOT NULL REFERENCES relationship_types(id) ON DELETE RESTRICT,
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
    ]
]
