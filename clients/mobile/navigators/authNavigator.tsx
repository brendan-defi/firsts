import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "../types/authStackParamList";

import Homescreen from "../screens/Homescreen";
import Login from "../screens/Login";
import SignupNavigator from "./signupNavigator";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Home"
                component={Homescreen}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name="Login"
                component={Login}
                options={{ title: "Login" }}
            />
            <AuthStack.Screen
                name="Signup"
                component={SignupNavigator}
            />
        </AuthStack.Navigator>
    );
}
