import { AuthContextProvider } from "./contexts/authContext";

import Main from "./Main";

export default function App() {
    return (
        <AuthContextProvider>
            < Main />
        </AuthContextProvider>
    );
}
