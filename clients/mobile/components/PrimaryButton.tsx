import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { PrimaryButtonProps } from "../types/primaryButton";
import { ParamListBase } from "@react-navigation/native";

export default function PrimaryButton<ParamList extends ParamListBase>(
    { navigation, destination, text}: PrimaryButtonProps<ParamList>
) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(destination)}
            style={homescreenStyles.heroCta}
        >
            <Text style={homescreenStyles.heroCtaText}>{text}</Text>
        </TouchableOpacity>
    );
}

const defaultFontSize = 16;

const homescreenStyles = StyleSheet.create({
    heroCta: {
        backgroundColor: "#8965AC",
        borderRadius: 10,
        width: 120,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
    },
    heroCtaText: {
        color: "#F5F1E3",
        fontSize: defaultFontSize,
    },
});
