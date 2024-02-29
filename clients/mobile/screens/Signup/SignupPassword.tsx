import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, TextInput } from "react-native";

import { SignupProps } from "../../types/signup";

import AuthNavigationButton from "../../components/Buttons/AuthNavigationButton";
import { navigationButtonStyles } from "../../styles/navigationButton";

export default function SignupPassword( {navigation}: SignupProps) {
    const [formInput, setFormInput] = useState("")

    return (
        <SafeAreaView style={styles.container}>
            <Text>Signup</Text>
            <View>
                <TextInput
                    style={styles.formField}
                    onChangeText={setFormInput}
                    value={formInput}
                />
            </View>
            <AuthNavigationButton
                navigation={navigation}
                destination="Login"
                text="Continue"
                buttonStyle={navigationButtonStyles.primaryCta}
                textStyle={navigationButtonStyles.primaryCtaText}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    formField: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "#8965AC",
    }
});
