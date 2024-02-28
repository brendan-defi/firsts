import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Carousel from "../components/Carousel";

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
};

type HomescreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Home"
>;

type Props = {
    navigation: HomescreenNavigationProp;
};

export default function Homescreen({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <Image
                    style={styles.title}
                    source={require("../assets/homescreen/title.png")}
                />
                <Text style={styles.subtitle}>
                    From first yawns to first steps, Firsts helps you capture
                    your baby's precious first moments.
                </Text>
            </View>
            <Carousel />
            <View style={styles.ctaContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Signup")}
                    style={styles.secondaryCta}
                >
                    <Text style={styles.secondaryCtaText}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                    style={styles.heroCta}
                >
                    <Text style={styles.heroCtaText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const defaultFontSize = 16;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F5F1E3",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    contentContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        width: 400,
        height: 150,
    },
    subtitle: {
        color: "#8965AC",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: defaultFontSize * 1.15,
        textAlign: "center",
        marginHorizontal: 45,
        marginBottom: 20,
    },
    carousel: {
        width: 380,
        height: 380,
    },
    carouselImage: {
        width: "100%",
        height: "100%",
    },
    ctaContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    heroCta: {
        backgroundColor: "#8965AC",
        borderRadius: 10,
        width: 120,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
    },
    heroCtaText: {
        color: "#F5F1E3",
        fontSize: defaultFontSize,
    },
    secondaryCta: {
        backgroundColor: "#F5F1E3",
        borderColor: "#8965AC",
        borderWidth: 1,
        borderRadius: 10,
        width: 120,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
    },
    secondaryCtaText: {
        color: "#8965AC",
        fontSize: defaultFontSize,
    },
});
