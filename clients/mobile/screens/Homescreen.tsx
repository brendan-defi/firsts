import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { HomescreenProps } from "../types/homescreen";
import { homescreenStyles } from "../styles/homescreen";
import Carousel from "../components/Carousel";

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
                <TouchableOpacity
                    onPress={() => navigation.navigate("Signup")}
                    style={homescreenStyles.secondaryCta}
                >
                    <Text style={homescreenStyles.secondaryCtaText}>
                        Signup
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                    style={homescreenStyles.heroCta}
                >
                    <Text style={homescreenStyles.heroCtaText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
