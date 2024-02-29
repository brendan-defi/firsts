import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "../types/authStackParamList";

import Homescreen from "../screens/Homescreen";
import Login from "../screens/Login";
import SignupNavigator from "./signupNavigator";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen
                name="Home"
                component={Homescreen}
            />
            <AuthStack.Screen
                name="Login"
                component={Login}
            />
            <AuthStack.Screen
                name="Signup"
                component={SignupNavigator}
            />
        </AuthStack.Navigator>
    );
}
