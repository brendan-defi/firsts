steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS memories (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            child_id INTEGER NOT NULL REFERENCES children(id) ON DELETE CASCADE,
            memory_type_id INTEGER NOT NULL REFERENCES memory_types(id) ON DELETE RESTRICT,
            note TEXT,
            location POINT,
            created_at TIMESTAMPTZ NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL,
            deleted_at TIMESTAMPTZ
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS memories;
        """
    ]
]
