import React, { createContext, useContext, useState } from "react";

import {
    SignupContextProviderProps,
    SignupContext,
    SignupInfo,
} from "../types/signupContext";

const SignupContext = createContext<SignupContext | null>(null);

export default function SignupContextProvider({
    children,
}: SignupContextProviderProps) {
    const [signupInfo, setSignupInfo] = useState<SignupInfo>({
        username: "",
        password: "",
    });

    return (
        <SignupContext.Provider
            value={{
                signupInfo,
                setSignupInfo,
            }}
        >
            {children}
        </SignupContext.Provider>
    );
}

export function useSignupContext() {
    const context = useContext(SignupContext);
    if (!context) {
        throw new Error(
            "useSignupContext must be used within a SignupContextProvider"
        );
    }
    return context;
}
