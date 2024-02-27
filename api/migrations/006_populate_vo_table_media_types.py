steps = [
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
        DELETE FROM media_types
        """
    ]
]
