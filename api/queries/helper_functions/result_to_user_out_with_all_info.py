from models.users import UserOutWithAllInfo

def result_to_user_out_with_all_info(data):
    return UserOutWithAllInfo(
        id=data[0],
        username=data[1],
        first_name=data[2],
        last_name=data[3],
        created_at=data[4],
        updated_at=data[5],
        deleted_at=data[6]
    )
