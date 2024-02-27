steps = [
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
        DELETE FROM relationship_types;
        """
    ]
]
