import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AppStackParamList } from "../types/appStackParamList";

import { Dashboard, Calendar, CreateMemory, List, Settings } from "../screens";

const AppTabs = createBottomTabNavigator<AppStackParamList>();

export default function HomeNavigator() {
    return (
        <AppTabs.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AppTabs.Screen
                name="Dashboard"
                component={Dashboard}
            />
            <AppTabs.Screen
                name="Calendar"
                component={Calendar}
            />
            <AppTabs.Screen
                name="Create"
                component={CreateMemory}
            />
            <AppTabs.Screen
                name="List"
                component={List}
            />
            <AppTabs.Screen
                name="Settings"
                component={Settings}
            />
        </AppTabs.Navigator>
    );
}
