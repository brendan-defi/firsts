export type AuthContextProviderProps = {
    children: React.ReactNode;
}

export type BearerToken = string;

export type AuthState = {
    isLoggedIn: boolean;
    hasCompletedNux: boolean;
    setHasCompletedNux: React.Dispatch<React.SetStateAction<boolean>>;
    storeBearerToken: (bearerToken: BearerToken) => Promise<void>;
    deleteBearerToken: () => Promise<void>;
    getBearerToken: () => Promise<BearerToken | null>;
}
