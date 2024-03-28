import { Text, TouchableOpacity } from "react-native";

import { useAuthContext } from "../contexts/authContext";

export default function Logout() {
    const { deleteBearerToken } = useAuthContext();

    return (
        <TouchableOpacity onPress={deleteBearerToken}>
            <Text>Logout</Text>
        </TouchableOpacity>
    );
}
