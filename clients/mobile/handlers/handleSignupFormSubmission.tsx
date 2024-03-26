import { SignupInfo } from "../types/signupContext";

export default async function handleSignupFormSubmission(
    signupFormData: SignupInfo,
    errorSetter: React.Dispatch<React.SetStateAction<string>>
) {
    if (signupFormData.password !== signupFormData.passwordConfirmation) {
        errorSetter("Password inputs do not match.")
        return;
    }
    const signupUrl = `http://localhost:8000/api/users`
    const fetchConfig = {
        method: "POST",
        body: JSON.stringify(signupFormData),
        headers: {
            "Content-Type": "application/json",
        },
    }
    const response = await fetch(signupUrl, fetchConfig)
    if (!response.ok) {
        const error = await response.json()
        errorSetter(error.detail)
    }
    return response.status;
}
