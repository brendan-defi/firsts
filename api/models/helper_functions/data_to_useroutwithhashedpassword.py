from models.users import UserOutWithHashedPassword


def data_to_user_out_with_hashed_password(data):
    return UserOutWithHashedPassword(
        id=data[0],
        username=data[1],
        hashed_password=data[2]
    )
