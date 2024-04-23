import { UserData } from "../types/userData";
import { UserDataForAccountUpdate } from "../types/userDataForAccountUpdate";


export default async function updateUserData(
    formData: UserDataForAccountUpdate,
    token: string
): Promise<UserData | null> {
    const url = `http://localhost:8000/api/users/me`;
    const config = {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    };

    const response = await fetch(url, config);
    if (!response.ok) {
        return null;
    }
    const data = await response.json();

    return data;
}
