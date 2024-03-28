import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AuthStackParamList } from "./authStackParamList";

export type LoginProps = {
    navigation: LoginNavigationProp;
};

type LoginNavigationProp = NativeStackNavigationProp<
    AuthStackParamList,
    "Login"
>;
