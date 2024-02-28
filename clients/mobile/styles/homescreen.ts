import { StyleSheet } from "react-native";

const defaultFontSize = 16;

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
    carousel: {
        width: 380,
        height: 380,
    },
    carouselImage: {
        width: "100%",
        height: "100%",
    },
    ctaContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
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
