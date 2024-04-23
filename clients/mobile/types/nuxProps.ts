import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { NuxStackParamList } from "./nuxStackParamList";

export type NuxProps = {
    navigation: NuxNavigationProp;
};

type NuxNavigationProp = NativeStackNavigationProp<
    NuxStackParamList,
    "NUXName"
>;
