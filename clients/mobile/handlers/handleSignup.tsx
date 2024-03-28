import { SignupInfo } from "../types/signupContext";

export default async function handleSignup(
    signupFormData: SignupInfo,
    errorSetter: React.Dispatch<React.SetStateAction<string>>
) {
    // FORM VALIDATION
    if (signupFormData.password !== signupFormData.passwordConfirmation) {
        errorSetter("Password inputs do not match.");
        return null;
    }

    // SIGNUP
    const signupUrl = `http://localhost:8000/api/users`;
    const signupConfig = {
        method: "POST",
        body: JSON.stringify(signupFormData),
        headers: {
            "Content-Type": "application/json",
        },
    };
    const signupResponse = await fetch(signupUrl, signupConfig);
    if (!signupResponse.ok) {
        const signupError = await signupResponse.json();
        errorSetter(String(signupError.detail));
        return null;
    }

    // LOGIN
    const loginCreds = new FormData();
    loginCreds.append("username", signupFormData.username);
    loginCreds.append("password", signupFormData.password);
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
        errorSetter(String(loginError.detail));
        return null;
    }
    const loginData = await loginResponse.json();
    return loginData.access_token;
}
