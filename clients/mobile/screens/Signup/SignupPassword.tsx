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

import { useSignupContext } from "../../contexts/signupContext";
import { useAuthContext } from "../../contexts/authContext";
import handleSignup from "../../handlers/handleSignup";

import { SignupProps } from "../../types/signupProps";
import { navigationButtonStyles } from "../../styles/navigationButton";
import { signupStyles } from "../../styles/signup";


export default function SignupPassword({ navigation }: SignupProps) {
    const { signupInfo, setSignupInfo } = useSignupContext();
    const { storeBearerToken } = useAuthContext();
    const [error, setError] = useState("");

    const handleSignupFormSubmission = async () => {
        const bearerToken = await handleSignup(signupInfo);
        if (bearerToken instanceof Error) {
            setError(bearerToken.message)
            return;
        }
        await storeBearerToken(bearerToken)
        console.log({bearerToken})
    }

    return (
        <SafeAreaView style={signupStyles.container}>
            <View style={signupStyles.titleContainer}>
                <Image
                    style={signupStyles.title}
                    source={require("../../assets/homescreen/title.png")}
                />
            </View>
            <View style={signupStyles.formContainer}>
                <View style={signupStyles.inputContainer}>
                    <Text style={signupStyles.formHeader}>Password</Text>
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
                        style={signupStyles.formField}
                    />
                </View>
                <View style={signupStyles.inputContainer}>
                    <Text style={signupStyles.formHeader}>
                        Confirm Password
                    </Text>
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
                        style={signupStyles.formField}
                    />
                </View>
                {error && <Text>{error}</Text>}
            </View>

            <View style={signupStyles.ctaContainer}>
                <TouchableOpacity
                    onPress={handleSignupFormSubmission}
                    style={navigationButtonStyles.primaryCta}
                >
                    <Text style={navigationButtonStyles.primaryCtaText}>
                        Register
                    </Text>
                </TouchableOpacity>
                <Pressable
                    style={signupStyles.secondaryCta}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text>Already have an account? Login</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
