steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL,
            firstname VARCHAR(100),
            lastname VARCHAR(100),
            created_at TIMESTAMPTZ NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL,
            deleted_at TIMESTAMPTZ
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS users;
        """
    ]
]
