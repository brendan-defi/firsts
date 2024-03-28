import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

import {
    AuthState,
    AuthContextProviderProps,
    BearerToken,
} from "../types/authContext";

const AuthContext = createContext<AuthState | null>(null);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const storeBearerToken = async (bearerToken: BearerToken) => {
        await SecureStore.setItemAsync("bearerToken", bearerToken);
        setIsLoggedIn(true);
    };

    const deleteBearerToken = async () => {
        await SecureStore.deleteItemAsync("bearerToken");
        setIsLoggedIn(false);
    };

    const getBearerToken = async () => {
        return await SecureStore.getItemAsync("bearerToken");
    };

    useEffect(() => {
        const checkToken = async () => {
            const token = await getBearerToken();
            if (token) {
                setIsLoggedIn(true);
            }
        };

        checkToken();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                storeBearerToken,
                deleteBearerToken,
                getBearerToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(
            "useAuthContext must be used within an AuthContextProvider"
        );
    }
    return context;
}
