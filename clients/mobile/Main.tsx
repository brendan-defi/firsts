import { NavigationContainer } from "@react-navigation/native";

import { useAuthContext } from "./contexts/authContext";

import AuthNavigator from "./navigators/authNavigator";
import NuxNavigator from "./navigators/nuxNavigator";
import HomeNavigator from "./navigators/homeNavigator";

export default function Main() {
    const { isLoggedIn, hasCompletedNux } = useAuthContext();

    return (
        <NavigationContainer>
            {!isLoggedIn
                ? <AuthNavigator />
                : !hasCompletedNux
                    ? <NuxNavigator />
                    : <HomeNavigator />
            }
        </NavigationContainer>
    );
}
