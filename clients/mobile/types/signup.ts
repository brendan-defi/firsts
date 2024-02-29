import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
};

type SignupNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Signup"
>;

export type SignupProps = {
    navigation: SignupNavigationProp;
};
