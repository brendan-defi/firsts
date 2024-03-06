import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SignupStackParamList } from "./signupStackParamList";

export type SignupProps = {
    navigation: SignupNavigationProp;
};

type SignupNavigationProp = NativeStackNavigationProp<
    SignupStackParamList,
    "SignupUsername"
>;
