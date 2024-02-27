steps = [
    [
        # "Up" SQL statement
        """
        INSERT INTO genders
            (gender, created_at, updated_at)
        VALUES
            ('Male', NOW(), NOW()),
            ('Female', NOW(), NOW())
        ;
        """,
        # "Down" SQL statement
        """
        DELETE FROM genders
        """
    ]
]
