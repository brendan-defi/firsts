import { UserData } from "./userData";

export type AuthContextProviderProps = {
    children: React.ReactNode;
}

export type BearerToken = string;

export type AuthState = {
    isLoggedIn: boolean;
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
    storeBearerToken: (bearerToken: BearerToken) => Promise<void>;
    deleteBearerToken: () => Promise<void>;
    getBearerToken: () => Promise<BearerToken | null>;
}
