from datetime import datetime
from zoneinfo import ZoneInfo

from authenticator import authenticator
from models.users import UserFormForAccountCreation, UserDataForAccountCreation

def prep_form_data_for_account_creation(
        data: UserFormForAccountCreation
):
    return UserDataForAccountCreation(
        username=data.username,
        hashed_password=authenticator.hash_password(data.password),
        created_at=datetime.now(tz=ZoneInfo("GMT")),
        updated_at=datetime.now(tz=ZoneInfo("GMT"))
    )
