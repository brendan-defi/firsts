import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
};

type HomescreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Home"
>;

export type HomescreenProps = {
    navigation: HomescreenNavigationProp;
};
