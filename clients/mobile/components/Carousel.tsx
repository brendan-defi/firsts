import { useRef, useState } from "react";
import {
    Animated,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleSheet,
    View,
} from "react-native";
import carouselItems from "../data/carouselData";
import CarouselItem from "./CarouselItem";
import Pagination from "./Pagination";

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            }
        )(event);
    };

    const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
        setIndex(viewableItems[0].index);
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    return (
        <View style={styles.container}>
            <FlatList
                data={carouselItems}
                renderItem={({ item }) => <CarouselItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                onViewableItemsChanged={handleViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                style={styles.images}
            />
            <Pagination data={carouselItems} scrollX={scrollX} index={index} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    images: {
        marginBottom: 5,
    },
});
