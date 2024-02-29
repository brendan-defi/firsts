import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "./types/authStackParamList";

import Homescreen from "./screens/Homescreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen
                    component={Homescreen}
                    name="Home"
                    options={{ headerShown: false }}
                />
                <AuthStack.Screen
                    component={Login}
                    name="Login"
                    options={{ title: "Login" }}
                />
                <AuthStack.Screen
                    component={Signup}
                    name="Signup"
                    options={{ title: "Signup" }}
                />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}
