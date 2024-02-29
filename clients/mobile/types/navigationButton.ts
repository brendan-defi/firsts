import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export type ButtonProps<T extends ParamListBase> = {
    navigation: NativeStackNavigationProp<T, keyof T>;
    destination: keyof T;
    text: string;
    buttonStyle: object;
    textStyle: object;
}
