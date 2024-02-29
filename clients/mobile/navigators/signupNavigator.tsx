import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignupStackParamList } from "../types/signupStackParamList"

import SignupUsername from "../screens/Signup/SignupUsername";
import SignupPassword from "../screens/Signup/SignupPassword";

const SignupStack = createNativeStackNavigator<SignupStackParamList>();

export default function SignupNavigator() {
    return (
        <SignupStack.Navigator
            initialRouteName="SignupUsername"

            screenOptions={{
                headerShown: false,
            }}
        >
            <SignupStack.Screen
                name="SignupUsername"
                component={SignupUsername}
            />
            <SignupStack.Screen
                name="SignupPassword"
                component={SignupPassword}
            />
        </SignupStack.Navigator>
    );
}
