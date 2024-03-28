import React from "react";
import {
    Image,
    Text,
    SafeAreaView,
    View,
    TextInput,
    Pressable,
} from "react-native";

import { useSignupContext } from "../../contexts/signupContext";
import SignupNavigationButton from "../../components/Buttons/SignupNavigationButton";
import { SignupProps } from "../../types/signupProps";
import { navigationButtonStyles } from "../../styles/navigationButton";
import { authStyles } from "../../styles/authentication";

export default function SignupUsername({ navigation }: SignupProps) {
    const { signupInfo, setSignupInfo } = useSignupContext();

    return (
        <SafeAreaView style={authStyles.container}>
            <View style={authStyles.titleContainer}>
                <Image
                    style={authStyles.title}
                    source={require("../../assets/homescreen/title.png")}
                />
            </View>
            <View style={authStyles.formContainer}>
                <Text style={authStyles.formHeader}>Username</Text>
                <TextInput
                    onChangeText={(text) =>
                        setSignupInfo({
                            ...signupInfo,
                            username: text,
                        })
                    }
                    value={signupInfo.username}
                    placeholder="snuggie_wuggie"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={authStyles.formField}
                />
            </View>
            <View style={authStyles.ctaContainer}>
                <SignupNavigationButton
                    navigation={navigation}
                    destination="SignupPassword"
                    text="Continue"
                    buttonStyle={navigationButtonStyles.primaryCta}
                    textStyle={navigationButtonStyles.primaryCtaText}
                />
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
