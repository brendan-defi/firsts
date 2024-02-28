import {
    Animated,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from "react-native";

export default function createHandleScroll(offsetBehavior: Animated.Value) {
    return (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: offsetBehavior,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            }
        )(event);
    };
}
