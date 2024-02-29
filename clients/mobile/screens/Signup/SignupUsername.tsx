import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, TextInput } from "react-native";

import { SignupProps } from "../../types/signup";

import SignupNavigationButton from "../../components/Buttons/SignupNavigationButton";
import { navigationButtonStyles } from "../../styles/navigationButton";

export default function SignupUsername({ navigation }: SignupProps) {
    const [formInput, setFormInput] = useState("");

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
            <SignupNavigationButton
                navigation={navigation}
                destination="SignupPassword"
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
    },
});
