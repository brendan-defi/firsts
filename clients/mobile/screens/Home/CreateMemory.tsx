// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function CreateMemory() {
    return (
        <View style={styles.container}>
            <Text>Create New Memory</Text>
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
