import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homescreen from "./screens/Homescreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    component={Homescreen}
                    name="Home"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    component={Login}
                    name="Login"
                    options={{ title: "Login" }}
                />
                <Stack.Screen
                    component={Signup}
                    name="Signup"
                    options={{ title: "Signup" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
