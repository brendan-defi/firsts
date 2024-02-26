from models.children import ChildOut


def result_to_childout(data):
    return ChildOut(
        id=data[0],
        firstname=data[1],
        lastname=data[2],
        date_of_birth=data[3],
        gender_id=data[4],
        created_at=data[5],
        updated_at=data[6],
        deleted_at=data[7]
    )
