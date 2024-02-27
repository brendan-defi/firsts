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
        """
    ]
]
