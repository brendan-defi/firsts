import { Image, View } from "react-native";
import { CarouselItemProps } from "../../types/carousel";
import { carouselItemStyles } from "../../styles/splashCarousel";

export default function CarouselItem({ item, style }: CarouselItemProps) {
    return (
        <View style={carouselItemStyles.carouselItemContainer}>
            <Image
                source={item.img}
                alt={`${item.description}`}
                style={style}
            />
        </View>
    );
}
