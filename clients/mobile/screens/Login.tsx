import React, { useState } from "react";
import {
    Image,
    Text,
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useAuthContext } from "../contexts/authContext";
import handleLogin from "../handlers/handleLogin";

import { LoginProps } from "../types/loginProps";
import { LoginData } from "../types/loginFormData";
import { navigationButtonStyles } from "../styles/navigationButton";
import { authStyles } from "../styles/authentication";

const blankLoginInfo: LoginData = {
    username: "",
    password: "",
};

export default function Login({ navigation }: LoginProps) {
    const { storeBearerToken } = useAuthContext();
    const [loginInfo, setLoginInfo] = useState<LoginData>(blankLoginInfo);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginFormSubmission = async () => {
        if (!loginInfo.username || !loginInfo.password) {
            setError("Please enter your username and password.")
            return;
        }
        const bearerToken = await handleLogin(loginInfo);
        if (bearerToken instanceof Error) {
            setError(bearerToken.message);
            return;
        }
        await storeBearerToken(bearerToken);
    };

    return (
        <SafeAreaView style={authStyles.container}>
            <View style={authStyles.titleContainer}>
                <Image
                    style={authStyles.title}
                    source={require("../assets/homescreen/title.png")}
                />
            </View>
            <View style={authStyles.formContainer}>
                <View style={authStyles.inputContainer}>
                    <Text style={authStyles.formHeader}>Username</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setError("");
                            setLoginInfo({
                                ...loginInfo,
                                username: text,
                            });
                        }}
                        value={loginInfo.username}
                        placeholder="Please enter your username..."
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={authStyles.formField}
                    />
                </View>
                <View style={authStyles.inputContainer}>
                    <Text style={authStyles.formHeader}>Password</Text>
                    <View style={authStyles.formField}>
                        <TextInput
                            onChangeText={(text) => {
                                setError("");
                                setLoginInfo({
                                    ...loginInfo,
                                    password: text,
                                });
                            }}
                            value={loginInfo.password}
                            placeholder="Please enter your password..."
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={!showPassword}
                            style={authStyles.formTextInput}
                        />
                        <MaterialCommunityIcons
                            name={showPassword ? "eye-off" : "eye"}
                            style={authStyles.visibilityIcon}
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    </View>
                </View>
                {error && <Text>{error}</Text>}
            </View>

            <View style={authStyles.ctaContainer}>
                <TouchableOpacity
                    onPress={handleLoginFormSubmission}
                    style={navigationButtonStyles.primaryCta}
                >
                    <Text style={navigationButtonStyles.primaryCtaText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <Pressable
                    style={authStyles.secondaryCta}
                    onPress={() => navigation.navigate("Signup")}
                >
                    <Text>Don't have an account? Signup</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
