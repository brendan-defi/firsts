steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS genders (
            id SERIAL PRIMARY KEY,
            gender VARCHAR(20),
            created_at TIMESTAMPTZ NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL,
            deleted_at TIMESTAMPTZ
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS genders;
        """,
    ],
    [
        # "Up" SQL statement
        """
        INSERT INTO genders
            (gender, created_at, updated_at)
        VALUES
            ('Male', NOW(), NOW()),
            ('Female', NOW(), NOW())
        ;
        """,
        # "Down" SQL statement
        """
        """,
    ]
]
