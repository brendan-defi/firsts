import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./navigators/authNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}
