import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

import {
    AuthState,
    AuthContextProviderProps,
    BearerToken,
} from "../types/authContext";

import getUserData from "../utils/getUserData";
import { UserData } from "../types/userData";

const AuthContext = createContext<AuthState | null>(null);

const emptyUserData = {
    id: 0,
    username: null,
    firstname: undefined,
    lastname: undefined,
    completed_nux: null,
    created_at: "",
    updated_at: "",
    deleted_at: null,
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState<UserData>({ ...emptyUserData });

    const storeBearerToken = async (bearerToken: BearerToken) => {
        await SecureStore.setItemAsync("bearerToken", bearerToken);
        setIsLoggedIn(true);
    };

    const deleteBearerToken = async () => {
        await SecureStore.deleteItemAsync("bearerToken");
        setIsLoggedIn(false);
        setUserData({ ...emptyUserData });
    };

    const getBearerToken = async () => {
        return await SecureStore.getItemAsync("bearerToken");
    };

    useEffect(() => {
        const checkUserData = async () => {
            const token = await getBearerToken();
            if (!token) {
                setIsLoggedIn(false);
                setUserData({ ...emptyUserData })
                return;
            }
            setIsLoggedIn(true);

            const user = await getUserData(token);
            if (user && JSON.stringify(user) !== JSON.stringify(userData)) {
                setUserData({
                    id: user.id,
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    completed_nux: user.completed_nux,
                    created_at: user.created_at,
                    updated_at: user.updated_at,
                    deleted_at: user.deleted_at,
                });
            }
        };

        checkUserData();
    }, [
        userData,
        isLoggedIn,
    ]);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                userData,
                setUserData,
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
