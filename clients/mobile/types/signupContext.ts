export type SignupContextProviderProps = {
    children: React.ReactNode;
}

export type SignupContext = {
    signupInfo: SignupInfo;
    setSignupInfo: React.Dispatch<React.SetStateAction<SignupInfo>>
}

export type SignupInfo = {
    username: string;
    password: string;
}
