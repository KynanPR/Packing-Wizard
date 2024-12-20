import { Tabs, Stack } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabLayout() {
	return (
		<SafeAreaProvider>
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarActiveTintColor: Colors.secondary,
					tabBarStyle: {
						backgroundColor: Colors.grey,
					},
					tabBarLabelStyle: {
						fontFamily: "Montserrat_700Bold",
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "Home",
						tabBarIcon: ({ color, focused }) => (
							<MaterialCommunityIcons
								name={focused ? "home" : "home-outline"}
								color={color}
								size={24}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="(lists)"
					options={{
						title: "Lists",
						tabBarIcon: ({ color, focused }) => (
							<MaterialCommunityIcons name="list-status" color={color} size={24} />
						),
					}}
				/>
				<Tabs.Screen
					name="(items)"
					options={{
						title: "Items",
						tabBarIcon: ({ color, focused }) => (
							<MaterialCommunityIcons
								name={focused ? "shape" : "shape-outline"}
								color={color}
								size={24}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="settings"
					options={{
						title: "Settings",
						tabBarIcon: ({ color, focused }) => (
							<MaterialCommunityIcons
								name={focused ? "cog" : "cog-outline"}
								color={color}
								size={24}
							/>
						),
					}}
				/>
			</Tabs>
		</SafeAreaProvider>
	);
}
