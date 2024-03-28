import registerNewUser from "../utils/registerNewUser";
import loginUser from "../utils/loginUser";

import { SignupInfo } from "../types/signupContext";

export default async function handleSignup(
    signupFormData: SignupInfo
): Promise<string | Error> {
    // FORM VALIDATION
    if (signupFormData.password !== signupFormData.passwordConfirmation) {
        return Error("Password inputs do not match.");
    }

    // SIGNUP
    const signupResponse = await registerNewUser(signupFormData);
    if (signupResponse instanceof Error) {
        return Error(`Could not register new user. ${signupResponse.message}`);
    }

    // LOGIN
    const loginResponse = await loginUser(signupFormData);
    if (loginResponse instanceof Error) {
        return Error(`Could not log in new user. ${loginResponse.message}`);
    }
    return loginResponse;
}
