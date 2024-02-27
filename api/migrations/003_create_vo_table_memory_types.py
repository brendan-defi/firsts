steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS memory_types (
            id SERIAL PRIMARY KEY,
            memory_type VARCHAR(100) NOT NULL,
            created_at TIMESTAMPTZ NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL,
            deleted_at TIMESTAMPTZ
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS memory_types;
        """
    ]
]
