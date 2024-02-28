import { StyleSheet } from "react-native";

import { defaultFontSize } from "./defaultFont";

export const primaryButtonStyles = StyleSheet.create({
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
});
