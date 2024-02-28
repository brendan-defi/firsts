import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// type RootStackParamList = {
//     Home: undefined;
//     Login: undefined;
//     Signup: undefined;
// };

// type StackParamList = Record<string, object | undefined>

// type NavigationProp = NativeStackNavigationProp<
//     StackParamList,
//     keyof StackParamList
// >;

export type PrimaryButtonProps<ParamList extends ParamListBase> = {
    navigation: NativeStackNavigationProp<ParamList, keyof ParamList>;
    destination: keyof ParamList;
    text: string;
};
