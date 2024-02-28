import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ParamListBase } from "@react-navigation/native";

import { PrimaryButtonProps } from "../types/primaryButton";
import { primaryButtonStyles } from "../styles/primaryButton";

export default function PrimaryButton<ParamList extends ParamListBase>(
    { navigation, destination, text}: PrimaryButtonProps<ParamList>
) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(destination)}
            style={primaryButtonStyles.primaryCta}
        >
            <Text style={primaryButtonStyles.primaryCtaText}>{text}</Text>
        </TouchableOpacity>
    );
};
