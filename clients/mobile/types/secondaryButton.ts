import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
};

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
>;

export type SecondaryButtonProps = {
    navigation: NavigationProp;
    destination: keyof RootStackParamList;
    text: string;
}
