import { Dimensions, StyleSheet } from "react-native";


const { width } = Dimensions.get("screen");

export const carouselStyles = StyleSheet.create({
    container: {
        margin: 10,
        width: "90%",
    },
    images: {
        marginBottom: 5,
    },
});

export const carouselItemStyles = StyleSheet.create({
    carouselItemContainer: {
        width: width,
        height: width,
    },
    carouselImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});

export const paginationStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    dot: {
        backgroundColor: "#8965AC",
        borderRadius: 6,
        marginHorizontal: 3,
        width: 12,
        height: 12,
    },
    dotActive: {
        backgroundColor: "#8965AC",
    },
});
