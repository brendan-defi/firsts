steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS relationship_types (
            id SERIAL PRIMARY KEY,
            relationship_type VARCHAR(100) NOT NULL,
            created_at TIMESTAMPTZ NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL,
            deleted_at TIMESTAMPTZ
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS relationship_types;
        """
    ]
]
