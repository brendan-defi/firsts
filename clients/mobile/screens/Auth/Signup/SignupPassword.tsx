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

import { useSignupContext } from "../../../contexts/signupContext";
import { useAuthContext } from "../../../contexts/authContext";
import handleSignup from "../../../handlers/handleSignup";

import { SignupProps } from "../../../types/signupProps";
import { navigationButtonStyles } from "../../../styles/navigationButton";
import { authStyles } from "../../../styles/authentication";

export default function SignupPassword({ navigation }: SignupProps) {
    const { signupInfo, setSignupInfo } = useSignupContext();
    const { storeBearerToken } = useAuthContext();

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConf, setShowPasswordConf] = useState(false);

    const handleSignupFormSubmission = async () => {
        if (
            !signupInfo.username ||
            !signupInfo.password
        ) {
            setError("Registration requires a username and password.");
            return;
        }
        const bearerToken = await handleSignup(signupInfo);
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
                    source={require("../../../assets/homescreen/title.png")}
                />
            </View>
            <View style={authStyles.formContainer}>
                <View style={authStyles.inputContainer}>
                    <Text style={authStyles.formHeader}>Password</Text>
                    <View style={authStyles.formField}>
                        <TextInput
                            onChangeText={(text) => {
                                setError("");
                                setSignupInfo({
                                    ...signupInfo,
                                    password: text,
                                });
                            }}
                            value={signupInfo.password}
                            placeholder="P@ssW0rd!"
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
                <View style={authStyles.inputContainer}>
                    <Text style={authStyles.formHeader}>Confirm Password</Text>
                    <View style={authStyles.formField}>
                        <TextInput
                            onChangeText={(text) => {
                                setError("");
                                setSignupInfo({
                                    ...signupInfo,
                                    passwordConfirmation: text,
                                });
                            }}
                            value={signupInfo.passwordConfirmation}
                            placeholder="P@ssW0rd!"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={!showPasswordConf}
                            style={authStyles.formTextInput}
                        />
                        <MaterialCommunityIcons
                            name={showPasswordConf ? "eye-off" : "eye"}
                            style={authStyles.visibilityIcon}
                            onPress={() =>
                                setShowPasswordConf(!showPasswordConf)
                            }
                        />
                    </View>
                </View>
                {error && <Text>{error}</Text>}
            </View>

            <View style={authStyles.ctaContainer}>
                <TouchableOpacity
                    onPress={handleSignupFormSubmission}
                    style={navigationButtonStyles.primaryCta}
                >
                    <Text style={navigationButtonStyles.primaryCtaText}>
                        Register
                    </Text>
                </TouchableOpacity>
                <Pressable
                    style={authStyles.secondaryCta}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text>Already have an account? Login</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
