// import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

import { dashboardStyles } from "../../styles/dashboard";

export default function Dashboard() {
    return (
        <SafeAreaView style={dashboardStyles.container}>
            <View style={dashboardStyles.contentContainer}>
                <View style={dashboardStyles.titleContainer}>
                    <Text style={dashboardStyles.title}>Your Recent Firsts</Text>
                    <Text>See All</Text>
                </View>
            </View>
            <View style={dashboardStyles.divider} />
            <View style={dashboardStyles.contentContainer}>
                <View style={dashboardStyles.titleContainer}>
                    <Text style={dashboardStyles.title}>Friends' Recent Firsts</Text>
                    <Text>See All</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
