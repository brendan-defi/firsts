from models.users import UserOut


def result_to_userout(data):
    return UserOut(
        id=data[0],
        username=data[1]
    )
