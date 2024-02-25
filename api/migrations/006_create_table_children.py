steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS children (
            id SERIAL PRIMARY KEY,
            account_manager INTEGER NOT NULL REFERENCES users(id),
            firstname VARCHAR(100) NOT NULL,
            lastname VARCHAR(100),
            date_of_birth DATE,
            gender_id INTEGER REFERENCES genders(id),
            created_at TIMESTAMPTZ NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL,
            deleted_at TIMESTAMPTZ
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS children;
        """,
    ]
]
