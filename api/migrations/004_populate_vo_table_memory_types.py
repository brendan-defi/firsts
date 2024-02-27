steps = [
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
        DELETE FROM memory_types;
        """
    ]
]
