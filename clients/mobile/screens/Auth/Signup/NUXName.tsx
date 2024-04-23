import { Text, SafeAreaView, View } from "react-native";
import LogoutLink from "../../../components/LogoutLink";

export default function NUXName() {
    return (
        <SafeAreaView>
            <View>
                <Text>NUXName</Text>
                <LogoutLink />
            </View>
        </SafeAreaView>
    );
}
