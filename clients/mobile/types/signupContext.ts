export type SignupContextProviderProps = {
    children: React.ReactNode;
}

export type SignupState = {
    signupInfo: SignupInfo;
    setSignupInfo: React.Dispatch<React.SetStateAction<SignupInfo>>
}

export type SignupInfo = {
    username: string;
    password: string;
    passwordConfirmation: string;
}
