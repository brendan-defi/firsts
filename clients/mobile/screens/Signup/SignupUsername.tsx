import { useState } from "react";
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
import { SignupProps } from "../../types/signup";
import { navigationButtonStyles } from "../../styles/navigationButton";
import { signupStyles } from "../../styles/signup";

export default function SignupUsername({ navigation }: SignupProps) {
    const { signupInfo, setSignupInfo } = useSignupContext();

    return (
        <SafeAreaView style={signupStyles.container}>
            <View style={signupStyles.titleContainer}>
                <Image
                    style={signupStyles.title}
                    source={require("../../assets/homescreen/title.png")}
                />
            </View>
            <View style={signupStyles.formContainer}>
                <Text style={signupStyles.formHeader}>Username</Text>
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
                    style={signupStyles.formField}
                />
            </View>
            <View style={signupStyles.ctaContainer}>
                <SignupNavigationButton
                    navigation={navigation}
                    destination="SignupPassword"
                    text="Continue"
                    buttonStyle={navigationButtonStyles.primaryCta}
                    textStyle={navigationButtonStyles.primaryCtaText}
                />
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
