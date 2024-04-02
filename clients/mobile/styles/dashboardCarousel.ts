import { Dimensions, StyleSheet } from "react-native";


const { width } = Dimensions.get("screen");

export const carouselStyles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        width: "100%",
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
        width: "90%",
        height: "100%",
        resizeMode: "contain",
    },
});
