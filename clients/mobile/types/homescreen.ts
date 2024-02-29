import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackParamList } from "./authStackParamList";

export type HomescreenProps = NativeStackScreenProps<
    AuthStackParamList,
    "Home"
>;
