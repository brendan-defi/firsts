export type AuthContextProviderProps = {
    children: React.ReactNode;
}

export type BearerToken = string;

export type AuthState = {
    isLoggedIn: boolean;
    hasCompletedNux: boolean;
    storeBearerToken: (bearerToken: BearerToken) => Promise<void>;
    deleteBearerToken: () => Promise<void>;
    getBearerToken: () => Promise<BearerToken | null>;
}
