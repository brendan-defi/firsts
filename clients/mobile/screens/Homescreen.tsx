import {
    Image,
    SafeAreaView,
    Text,
    View,
} from "react-native";

import { HomescreenProps } from "../types/homescreen";
import { homescreenStyles } from "../styles/homescreen";

import Carousel from "../components/Carousel";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function Homescreen({ navigation }: HomescreenProps) {
    return (
        <SafeAreaView style={homescreenStyles.mainContainer}>
            <View style={homescreenStyles.contentContainer}>
                <Image
                    style={homescreenStyles.title}
                    source={require("../assets/homescreen/title.png")}
                />
                <Text style={homescreenStyles.subtitle}>
                    From first yawns to first steps, Firsts helps you capture
                    your baby's precious first moments.
                </Text>
            </View>
            <Carousel />
            <View style={homescreenStyles.ctaContainer}>
                <SecondaryButton
                    navigation={navigation}
                    destination="Signup"
                    text="Signup"
                />
                <PrimaryButton
                    navigation={navigation}
                    destination="Login"
                    text="Login"
                />
            </View>
        </SafeAreaView>
    );
}
