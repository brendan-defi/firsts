import { StyleSheet } from "react-native";

import { defaultFontSize } from "./defaultFont";

export const secondaryButtonStyles = StyleSheet.create({
    secondaryCta: {
        backgroundColor: "#F5F1E3",
        borderColor: "#8965AC",
        borderWidth: 1,
        borderRadius: 10,
        width: 120,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
    },
    secondaryCtaText: {
        color: "#8965AC",
        fontSize: defaultFontSize,
    },
});
