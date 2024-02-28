import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { PaginationProps } from "../types/carousel";

const { width } = Dimensions.get("screen");

export default function Pagination({ data, index, scrollX }: PaginationProps) {
    return (
        <View style={styles.container}>
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
                            styles.dot,
                            { width: dotWidth, opacity },
                            idx === index && styles.dotActive,
                        ]}
                        key={idx.toString()}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    dot: {
        backgroundColor: "#8965AC",
        // backgroundColor: "#F5F1E3",
        borderRadius: 6,
        marginHorizontal: 3,
        width: 12,
        height: 12,
    },
    dotActive: {
        backgroundColor: "#8965AC",
    },
});
