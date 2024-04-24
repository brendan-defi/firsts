import { StyleSheet, Text, View } from "react-native";

import LogoutLink from "../../components/LogoutLink";
import { useAuthContext } from "../../contexts/authContext";

export default function Settings() {
    const {userData} = useAuthContext();

    return (
        <View style={styles.container}>
            <Text>{userData && userData.username}</Text>
            <Text>Settings</Text>
            <LogoutLink />
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
