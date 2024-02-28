import { Dimensions, Image, StyleSheet, View } from "react-native";
import { CarouselItemProps } from "../types/carousel";

const { width } = Dimensions.get("screen");

export default function CarouselItem({ item }: CarouselItemProps) {
    return (
        <View style={styles.carouselItemContainer}>
            <Image
                source={item.img}
                alt={`${item.description}`}
                style={styles.carouselImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
