import { Text, TouchableOpacity } from "react-native";

import { SignupButtonProps } from "../../types/signupNavigationButton";

export default function SignupNavigationButton(
    { navigation, destination, text, buttonStyle, textStyle}: SignupButtonProps
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
