import { StyleSheet } from "react-native";
import { defaultFontSize } from "./defaultFont";

export const authStyles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#F5F1E3",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    titleContainer: {
        flex: 0.4,
    },
    title: {
        width: 400,
        height: 150,
    },
    formContainer: {
        flex: 0.6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    inputContainer: {
        marginVertical: 10,
    },
    formHeader: {
        fontSize: defaultFontSize * 1.2,
        color: "#8965AC",
        fontWeight: "600",
    },
    formField: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 300,
        height: 40,
        marginTop: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: "#8965AC",
    },
    formTextInput: {
        flex: 1,
    },
    ctaContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    secondaryCta: {
        marginTop: 15,
        color: "#708090",
    },
    visibilityIcon: {
        fontSize: defaultFontSize,
        color: "#8965AC",
        marginLeft: 10,
    }
});
