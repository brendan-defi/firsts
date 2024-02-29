import { Text, TouchableOpacity } from "react-native";

import { AuthButtonProps } from "../types/authNavigationButton";

export default function AuthNavigationButton(
    { navigation, destination, text, buttonStyle, textStyle}: AuthButtonProps
) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(destination) }
            style={buttonStyle}
        >
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
};
