import { StyleSheet } from "react-native";
import { defaultFontSize } from "./defaultFont";

export const dashboardStyles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#F5F1E3",
    },
    contentContainer: {
        marginVertical: 5,
        display: "flex",
        flex: 1,
        flexDirection: "column",
    },
    titleContainer: {
        marginHorizontal: 15,
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: defaultFontSize * 1.25,
        color: "#8965AC",
    },
    divider: {
        marginVertical: 15,
        borderBottomColor: "#8965AC",
        borderBottomWidth: 2,
    }
})
