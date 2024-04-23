import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import LogoutLink from "../../components/LogoutLink";
import getUserData from "../../utils/getUserData";
import useToken from "../../hooks/useToken";
import { UserData } from "../../types/userData";

export default function Settings() {
    const bearerToken = useToken();
    const [userData, setUserData] = useState<UserData>()

    useEffect(() => {
        const setCurrentUserData = async () => {
            const currentUserData = await getUserData(bearerToken);
            if (currentUserData) {
                setUserData({
                    id: currentUserData.id,
                    username: currentUserData.username,
                    firstname: currentUserData.firstname,
                    lastname: currentUserData.lastname,
                    completed_nux: currentUserData.completed_nux,
                    created_at: currentUserData.created_at ,
                    updated_at: currentUserData.updated_at,
                    deleted_at: currentUserData.deleted_at,
                });
            }
        };
        setCurrentUserData();
    }, [bearerToken]);

    console.log({bearerToken})
    console.log({userData})

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
