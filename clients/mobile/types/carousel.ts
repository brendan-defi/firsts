import { Animated, StyleProp, ImageStyle } from "react-native";

type ImageRequire = number;

export type CarouselItemType = {
    id: number;
    img: ImageRequire;
    description: string;
};

export type CarouselItemProps = {
    item: CarouselItemType;
    style:StyleProp<ImageStyle>;
};

export type PaginationProps = {
    data: CarouselItemType[];
    scrollX: Animated.Value;
    index: number;
};

// type CarouselItemStyle = {
//     width: string;
//     height: string;
//     resizeMode: string;
// }
