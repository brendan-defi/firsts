// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useAuthContext } from "../contexts/authContext";

export default function Dashboard() {
    const {deleteBearerToken} = useAuthContext()
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
            <TouchableOpacity
                onPress={deleteBearerToken}
            >
                <Text>Logout</Text>
            </TouchableOpacity>
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
