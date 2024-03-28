// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Logout from "../components/Logout";

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
            <Logout />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
