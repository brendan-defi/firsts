import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignupStackParamList } from "../types/signupStackParamList";
import { SignupContextProvider } from "../contexts/signupContext";

import {
    SignupUsername,
    SignupPassword,
    // NUXName,
    // NUXCreateChild,
    // NUXConnectChild,
    // NUXWelcome,
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
                {/* <SignupStack.Screen
                    name="NUXName"
                    component={NUXName}
                />
                <SignupStack.Screen
                    name="NUXCreateChild"
                    component={NUXCreateChild}
                />
                <SignupStack.Screen
                    name="NUXConnectChild"
                    component={NUXConnectChild}
                />
                <SignupStack.Screen
                    name="NUXWelcome"
                    component={NUXWelcome}
                /> */}
            </SignupStack.Navigator>
        </SignupContextProvider>
    );
}
