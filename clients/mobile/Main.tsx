import { NavigationContainer } from "@react-navigation/native";

import { useAuthContext } from "./contexts/authContext";

import AuthNavigator from "./navigators/authNavigator";
import AppNavigator from "./navigators/homeNavigator";

export default function Main() {
    const { isLoggedIn } = useAuthContext();

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
