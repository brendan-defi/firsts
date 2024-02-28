// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
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
