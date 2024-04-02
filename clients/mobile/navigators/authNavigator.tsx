import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "../types/authStackParamList";

import SplashScreen from "../screens/Auth/SplashScreen";
import Login from "../screens/Auth/Login";
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
                component={SplashScreen}
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
