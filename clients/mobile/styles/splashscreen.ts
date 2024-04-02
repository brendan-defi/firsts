import { StyleSheet } from "react-native";

import { defaultFontSize } from "./defaultFont";

export const homescreenStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F5F1E3",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    contentContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        width: 400,
        height: 150,
    },
    subtitle: {
        color: "#8965AC",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: defaultFontSize * 1.15,
        textAlign: "center",
        marginHorizontal: 45,
        marginBottom: 20,
    },
    ctaContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});
