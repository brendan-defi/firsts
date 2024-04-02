import { Image, View } from "react-native";
import { CarouselItemProps } from "../../types/carousel";
import { carouselItemStyles } from "../../styles/carousel";

export default function SplashCarouselItem({ item }: CarouselItemProps) {
    return (
        <View style={carouselItemStyles.carouselItemContainer}>
            <Image
                source={item.img}
                alt={`${item.description}`}
                style={carouselItemStyles.carouselImage}
            />
        </View>
    );
}
