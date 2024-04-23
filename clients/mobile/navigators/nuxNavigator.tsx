import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NuxStackParamList } from "../types/nuxStackParamList";
import { SignupContextProvider } from "../contexts/signupContext";

import {
    NUXName,
    NUXCreateChild,
    NUXConnectChild,
    NUXWelcome,
} from "../screens";

const NuxStack = createNativeStackNavigator<NuxStackParamList>();

export default function NuxNavigator() {
    return (
        <SignupContextProvider>
            <NuxStack.Navigator
                initialRouteName="NUXName"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <NuxStack.Screen
                    name="NUXName"
                    component={NUXName}
                />
                <NuxStack.Screen
                    name="NUXCreateChild"
                    component={NUXCreateChild}
                />
                <NuxStack.Screen
                    name="NUXConnectChild"
                    component={NUXConnectChild}
                />
                <NuxStack.Screen
                    name="NUXWelcome"
                    component={NUXWelcome}
                />
            </NuxStack.Navigator>
        </SignupContextProvider>
    );
}
