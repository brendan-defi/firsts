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
        """,
    ],
    [
        # "Up" SQL statement
        """
        INSERT INTO memory_types
            (memory_type, created_at, updated_at)
        VALUES
            ('First Yawn', NOW(), NOW()),
            ('First Poop', NOW(), NOW()),
            ('First Burp', NOW(), NOW()),
            ('First Sneeze', NOW(), NOW())
        ;
        """,
        # "Down" SQL statement
        """
        """,
    ]
]
