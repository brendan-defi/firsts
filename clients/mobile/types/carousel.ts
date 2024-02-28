import { Animated } from "react-native";

type ImageRequire = number;

export type CarouselItemType = {
    id: number;
    img: ImageRequire;
    description: string;
};

export type CarouselItemProps = {
    item: CarouselItemType;
};

export type PaginationProps = {
    data: CarouselItemType[];
    scrollX: Animated.Value;
    index: number;
};
