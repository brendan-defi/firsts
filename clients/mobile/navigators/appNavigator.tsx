import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStackParamList } from "../types/appStackParamList";

import Dashboard from "../screens/Dashboard";

const AppStack = createNativeStackNavigator<AppStackParamList>();

export default function AuthNavigator() {
    return (
        <AppStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AppStack.Screen
                name="Dashboard"
                component={Dashboard}
            />
        </AppStack.Navigator>
    );
}
