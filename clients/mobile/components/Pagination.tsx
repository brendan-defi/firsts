import { Animated, Dimensions, View } from "react-native";
import { PaginationProps } from "../types/carousel";
import { paginationStyles } from "../styles/carousel";

const { width } = Dimensions.get("screen");

export default function Pagination({ data, index, scrollX }: PaginationProps) {
    return (
        <View style={paginationStyles.container}>
            {data.map((_, idx) => {
                const inputRange = [
                    (idx - 1) * width,
                    idx * width,
                    (idx + 1) * width,
                ];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [12, 30, 12],
                    extrapolate: "clamp",
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: "clamp",
                });

                return (
                    <Animated.View
                        style={[
                            paginationStyles.dot,
                            { width: dotWidth, opacity },
                            idx === index && paginationStyles.dotActive,
                        ]}
                        key={idx.toString()}
                    />
                );
            })}
        </View>
    );
}
