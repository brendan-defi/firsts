import { StyleSheet } from "react-native";

import { defaultFontSize } from "./defaultFont";

export const navigationButtonStyles = StyleSheet.create({
    primaryCta: {
        backgroundColor: "#8965AC",
        borderRadius: 10,
        width: 120,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
    },
    primaryCtaText: {
        color: "#F5F1E3",
        fontSize: defaultFontSize,
    },
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
