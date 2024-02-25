steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS media_types (
            id SERIAL PRIMARY KEY,
            media_type VARCHAR(20),
            created_at TIMESTAMPTZ NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL,
            deleted_at TIMESTAMPTZ
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS media_types;
        """,
    ],
    [
        # "Up" SQL statement
        """
        INSERT INTO media_types
            (media_type, created_at, updated_at)
        VALUES
            ('Photo', NOW(), NOW()),
            ('Video', NOW(), NOW())
        ;
        """,
        # "Down" SQL statement
        """
        """,
    ]
]
