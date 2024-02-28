import { Text, TouchableOpacity } from "react-native";

import { SecondaryButtonProps } from "../types/secondaryButton";
import { secondaryButtonStyles } from "../styles/secondaryButton";

export default function SecondaryButton(
    { navigation, destination, text}: SecondaryButtonProps
) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(destination)}
            style={secondaryButtonStyles.secondaryCta}
        >
            <Text style={secondaryButtonStyles.secondaryCtaText}>{text}</Text>
        </TouchableOpacity>
    );
};
