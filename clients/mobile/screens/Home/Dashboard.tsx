import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";

import { dashboardStyles } from "../../styles/dashboard";
import DashboardCarousel from "../../components/Carousels/DashboardCarousel";

import carouselItems from "../../data/carouselData";

export default function Dashboard() {
    return (
        <SafeAreaView style={dashboardStyles.container}>
            <ScrollView>
                <View style={dashboardStyles.contentContainer}>
                    <View style={dashboardStyles.titleContainer}>
                        <Text style={dashboardStyles.title}>Your Recent Firsts</Text>
                        <Text>See All</Text>
                    </View>
                    <DashboardCarousel carouselItems={carouselItems}/>
                </View>
                <View style={dashboardStyles.divider} />
                <View style={dashboardStyles.contentContainer}>
                    <View style={dashboardStyles.titleContainer}>
                        <Text style={dashboardStyles.title}>Friends' Recent Firsts</Text>
                        <Text>See All</Text>
                    </View>
                    <DashboardCarousel carouselItems={carouselItems.slice(2,4)}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
