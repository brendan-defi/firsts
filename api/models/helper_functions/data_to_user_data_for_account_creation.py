from models.users import UserFormForAccountCreation, UserDataForAccountCreation
from datetime import datetime
from zoneinfo import ZoneInfo


def data_to_user_data_for_account_creation(
        data: UserFormForAccountCreation
):
    return UserDataForAccountCreation(
        username=data.username,
        hashed_password=data.generate_hashed_password(),
        created_at=datetime.now(tz=ZoneInfo("GMT")),
        updated_at=datetime.now(tz=ZoneInfo("GMT"))
    )
