steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY NOT NULL,
            email VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL,
            firstname VARCHAR(100),
            lastname VARCHAR(100),
            created_at DATE NOT NULL,
            updated_at DATE NOT NULL,
            deleted_at DATE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE IF EXISTS users;
        """,
    ]
]
