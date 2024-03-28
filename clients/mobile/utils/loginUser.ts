import { LoginData } from "../types/loginFormData";

export default async function loginUser(
    formData: LoginData
): Promise<string | Error> {
    const loginCreds = new FormData();
    loginCreds.append("username", formData.username);
    loginCreds.append("password", formData.password);
    const loginUrl = `http://localhost:8000/token`;
    const loginConfig = {
        method: "POST",
        body: loginCreds,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    };
    const loginResponse = await fetch(loginUrl, loginConfig);
    if (!loginResponse.ok) {
        const loginError = await loginResponse.json();
        return Error(String(loginError.detail));
    }
    const loginData = await loginResponse.json();
    return loginData.access_token;
};
