from models.users import UserFormForAccountUpdate, UserDataForAccountUpdate
from datetime import datetime
from zoneinfo import ZoneInfo


def data_to_user_data_for_account_update(
        data: UserFormForAccountUpdate
):
    return UserDataForAccountUpdate(
        username=data.username,
        first_name=data.first_name,
        last_name=data.last_name,
        updated_at=datetime.now(tz=ZoneInfo("GMT")),
    )
