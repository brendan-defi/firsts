import React, { useEffect, useState } from "react";
import {
    Image,
    Text,
    SafeAreaView,
    View,
    TextInput,
    Pressable,
    TouchableOpacity,
} from "react-native";

import { NuxProps } from "../../../types/nuxProps";
import { UserDataForAccountUpdate } from "../../../types/userDataForAccountUpdate";

import { authStyles } from "../../../styles/authentication";
import { navigationButtonStyles } from "../../../styles/navigationButton";

import useToken from "../../../hooks/useToken";
import updateUserData from "../../../utils/updateUserData";
import { useAuthContext } from "../../../contexts/authContext";

const emptyFormData = {
    username: null,
    firstname: undefined,
    lastname: undefined,
    completed_nux: null,
};

export default function NUXName({ navigation }: NuxProps) {
    const bearerToken = useToken();
    const { userData, setUserData } = useAuthContext();
    const [userDataForUpdateForm, setUserDataForUpdateForm] =
        useState<UserDataForAccountUpdate>({ ...emptyFormData });

    useEffect(() => {
        setUserDataForUpdateForm({
            username: userData.username,
            firstname: userData.firstname,
            lastname: userData.lastname,
            completed_nux: userData.completed_nux,
        });
    }, []);

    const handleFormInput = (text: string, key: string) => {
        setUserDataForUpdateForm({
            ...userDataForUpdateForm,
            [key]: text,
        });
    };
    const handleUserDataUpdate = async () => {
        const updatedUserData = await updateUserData(
            userDataForUpdateForm,
            bearerToken
        );
        if (!updatedUserData) {
            console.error("some sort of error");
        }
        navigation.navigate("NUXCreateChild");
    };
    const handleSkipOnboarding = async () => {
        const skipNuxFormData: UserDataForAccountUpdate = {
            ...userDataForUpdateForm,
            completed_nux: true,
        };
        const updatedUserData = await updateUserData(
            skipNuxFormData,
            bearerToken
        );
        if (!updatedUserData) {
            console.error("some sort of error");
        }
        setUserData({ ...userData, completed_nux: true });
    };

    return (
        <SafeAreaView style={authStyles.container}>
            <View style={authStyles.titleContainer}>
                <Image
                    style={authStyles.title}
                    source={require("../../../assets/homescreen/title.png")}
                />
                <Text style={authStyles.formHeader}>
                    Welcome to Firsts! To get started, tell us more about
                    yourself and your family.
                </Text>
            </View>
            <View style={authStyles.formContainer}>
                <View style={authStyles.inputContainer}>
                    <Text style={authStyles.formHeader}>Your First Name</Text>
                    <TextInput
                        onChangeText={(text) =>
                            handleFormInput(text, "firstname")
                        }
                        value={userDataForUpdateForm.firstname}
                        placeholder="Snuggie"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={authStyles.formField}
                    />
                </View>
                <View style={authStyles.inputContainer}>
                    <Text style={authStyles.formHeader}>Your Last Name</Text>
                    <TextInput
                        onChangeText={(text) =>
                            handleFormInput(text, "lastname")
                        }
                        value={userDataForUpdateForm.lastname}
                        placeholder="Wuggie"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={authStyles.formField}
                    />
                </View>
            </View>
            <View style={authStyles.ctaContainer}>
                <TouchableOpacity
                    onPress={handleUserDataUpdate}
                    style={navigationButtonStyles.primaryCta}
                >
                    <Text style={navigationButtonStyles.primaryCtaText}>
                        Continue
                    </Text>
                </TouchableOpacity>
                <Pressable
                    style={authStyles.secondaryCta}
                    onPress={handleSkipOnboarding}
                >
                    <Text>Skip Onboarding</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
