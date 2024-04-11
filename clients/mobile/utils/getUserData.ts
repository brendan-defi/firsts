import { UserData } from "../types/userData";

export default async function getUserData(
    token: string
): Promise<UserData | null> {
    const url = `http://localhost:8000/api/users/me`;
    const config = {
        method: "GET",
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
