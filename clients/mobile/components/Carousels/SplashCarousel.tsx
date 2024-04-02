import { useRef, useState } from "react";
import { Animated, FlatList, View } from "react-native";

import CarouselItem from "./CarouselItem";
import Pagination from "../Pagination";
import carouselItems from "../../data/carouselData";
import { carouselItemStyles, carouselStyles } from "../../styles/carousel";

import createHandleScroll from "../../handlers/carousel/handleScroll";
import createHandleViewableItemsChanged from "../../handlers/carousel/handleViewableItemsChanged";

export default function SplashCarousel() {
    const [index, setIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;
    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;
    const handleViewableItemsChanged = useRef(
        createHandleViewableItemsChanged(setIndex)
    ).current;

    const handleScroll = createHandleScroll(scrollX);

    return (
        <View style={carouselStyles.container}>
            <FlatList
                data={carouselItems}
                renderItem={({ item }) => <CarouselItem item={item} style={carouselItemStyles.carouselImage}/>}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                onViewableItemsChanged={handleViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                style={carouselStyles.images}
            />
            <Pagination data={carouselItems} scrollX={scrollX} index={index} />
        </View>
    );
}
