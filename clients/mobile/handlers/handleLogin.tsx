import { LoginData } from "../types/loginFormData";
import loginUser from "../utils/loginUser";

export default async function handleLogin(loginFormData: LoginData) {
    const loginResponse = await loginUser(loginFormData);
    if (loginResponse instanceof Error) {
        return Error(`Could not log in. ${loginResponse.message}`);
    }
    return loginResponse;
};
