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
        """,
    ],
    [
        # "Up" SQL statement
        """
        INSERT INTO relationship_types
            (relationship_type, created_at, updated_at)
        VALUES
            ('Mother', NOW(), NOW()),
            ('Father', NOW(), NOW()),
            ('Stepmother', NOW(), NOW()),
            ('Stepfather', NOW(), NOW()),
            ('Guardian', NOW(), NOW()),
            ('Grandmother', NOW(), NOW()),
            ('Grandfather', NOW(), NOW()),
            ('Uncle', NOW(), NOW()),
            ('Aunt', NOW(), NOW()),
            ('Cousin', NOW(), NOW()),
            ('Other Family', NOW(), NOW()),
            ('Friend', NOW(), NOW())
        ;
        """,
        # "Down" SQL statement
        """
        """,
    ]
]
