import {
    Image,
    SafeAreaView,
    Text,
    View,
} from "react-native";

import { HomescreenProps } from "../../types/homescreen";
import { homescreenStyles } from "../../styles/splashscreen";

import SplashCarousel from "../../components/Carousels/SplashCarousel";
import AuthNavigationButton from "../../components/Buttons/AuthNavigationButton";
import { navigationButtonStyles } from "../../styles/navigationButton";

export default function SplashScreen({ navigation }: HomescreenProps) {
    return (
        <SafeAreaView style={homescreenStyles.mainContainer}>
            <View style={homescreenStyles.contentContainer}>
                <Image
                    style={homescreenStyles.title}
                    source={require("../../assets/homescreen/title.png")}
                />
                <Text style={homescreenStyles.subtitle}>
                    From first yawns to first steps, Firsts helps you capture
                    your baby's precious first moments.
                </Text>
            </View>
            <SplashCarousel />
            <View style={homescreenStyles.ctaContainer}>
                <AuthNavigationButton
                    navigation={navigation}
                    destination="Signup"
                    text="Signup"
                    buttonStyle={navigationButtonStyles.secondaryCta}
                    textStyle={navigationButtonStyles.secondaryCtaText}
                />
                <AuthNavigationButton
                    navigation={navigation}
                    destination="Login"
                    text="Login"
                    buttonStyle={navigationButtonStyles.primaryCta}
                    textStyle={navigationButtonStyles.primaryCtaText}
                />
            </View>
        </SafeAreaView>
    );
}
