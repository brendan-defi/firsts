import { ViewToken } from "react-native";

export default function createHandleViewableItemsChanged(
    stateUpdater: React.Dispatch<React.SetStateAction<number>>
) {
    return ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
        if (viewableItems.length > 0 && viewableItems[0].index) {
            stateUpdater(viewableItems[0].index);
        }
    };
}
