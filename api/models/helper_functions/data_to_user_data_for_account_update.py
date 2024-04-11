from models.users import UserFormForAccountUpdate, UserDataForAccountUpdate
from datetime import datetime
from zoneinfo import ZoneInfo


def data_to_user_data_for_account_update(
        data: UserFormForAccountUpdate
):
    return UserDataForAccountUpdate(
        username=data.username,
        firstname=data.firstname,
        lastname=data.lastname,
        completed_nux=data.completed_nux,
        updated_at=datetime.now(tz=ZoneInfo("GMT")),
    )
