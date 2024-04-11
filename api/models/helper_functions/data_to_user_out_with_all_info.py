from datetime import datetime
from models.users import UserOutWithAllInfo


def data_to_user_out_with_all_info(data):
    user_data = UserOutWithAllInfo(
        id=data[0],
        username=data[1],
        firstname=data[2],
        lastname=data[3],
        completed_nux=data[4],
        created_at=data[5],
        updated_at=data[6],
        deleted_at=data[7]
    )
    return user_data
