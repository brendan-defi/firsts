steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL,
            firstname VARCHAR(100),
            lastname VARCHAR(100),
            created_at TIMESTAMP NOT NULL,
            updated_at TIMESTAMP NOT NULL,
            deleted_at TIMESTAMP
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS users;
        """,
    ]
]
