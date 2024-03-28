import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./navigators/authNavigator";
import { AuthContextProvider } from "./contexts/authContext";

export default function App() {
    return (
        <AuthContextProvider>
            <NavigationContainer>
                <AuthNavigator />
            </NavigationContainer>
        </AuthContextProvider>
    );
}
