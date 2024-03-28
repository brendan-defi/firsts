import { SignupInfo } from "../types/signupContext";

export default async function registerNewUser(
    signupFormData: SignupInfo
): Promise<Error | true> {
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
        return Error(String(signupError.detail));
    }
    return true;
}
