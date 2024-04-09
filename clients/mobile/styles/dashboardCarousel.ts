import { Dimensions, StyleSheet } from "react-native";


const { width } = Dimensions.get("screen");

export const carouselStyles = StyleSheet.create({
    container: {
        // marginHorizontal: 10,
        // width: width - 20,
    },
    images: {
        marginBottom: 5,
    },
});

export const carouselItemStyles = StyleSheet.create({
    carouselImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});
