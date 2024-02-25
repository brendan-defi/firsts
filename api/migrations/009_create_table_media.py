steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS media (
            id SERIAL PRIMARY KEY,
            url VARCHAR(255) NOT NULL,
            media_type_id INTEGER NOT NULL REFERENCES media_types(id) ON DELETE RESTRICT,
            memory_id INTEGER NOT NULL REFERENCES memories(id) ON DELETE CASCADE,
            created_at TIMESTAMPTZ NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL,
            deleted_at TIMESTAMPTZ
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS media;
        """,
    ]
]
