import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

import {
    AuthState,
    AuthContextProviderProps,
    BearerToken,
} from "../types/authContext";

import getUserData from "../utils/getUserData";

const AuthContext = createContext<AuthState | null>(null);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasCompletedNux, setHasCompletedNux] = useState(false);

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
        const checkUserData = async () => {
            const token = await getBearerToken();
            if (!token) {
                return;
            }
            setIsLoggedIn(true);

            const user = await getUserData(token);
            if (user?.completed_nux) {
                setHasCompletedNux(user.completed_nux);
            }
        };

        checkUserData();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                hasCompletedNux,
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
