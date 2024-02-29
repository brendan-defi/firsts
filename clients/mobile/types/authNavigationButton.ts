import { ButtonProps } from "./navigationButton";

export type AuthButtonProps = ButtonProps<AuthStackParamList>

type AuthStackParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
};
