import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignupStackParamList } from "../types/signupStackParamList";
import { SignupContextProvider } from "../contexts/signupContext";

import {
    SignupUsername,
    SignupPassword,
} from "../screens";

const SignupStack = createNativeStackNavigator<SignupStackParamList>();

export default function SignupNavigator() {
    return (
        <SignupContextProvider>
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
        </SignupContextProvider>
    );
}
