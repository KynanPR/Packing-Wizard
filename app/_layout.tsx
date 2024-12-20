import { StyleSheet, StatusBar, Text, TextProps } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import Colors from "../constants/Colors";
import {
	Montserrat_400Regular,
	Montserrat_400Regular_Italic,
	Montserrat_700Bold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const insets = useSafeAreaInsets();
	const [loaded, error] = useFonts({
		Montserrat_400Regular,
		Montserrat_400Regular_Italic,
		Montserrat_700Bold,
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<StatusBar barStyle={"light-content"} backgroundColor={Colors.grey}></StatusBar>
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: Colors.grey,
					},
					headerShadowVisible: false,
					headerTintColor: Colors.secondary,
					headerTitleStyle: {
						fontWeight: "bold",
						fontFamily: "Montserrat_700Bold",
					},
					headerTitleAlign: "center",
				}}
			>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" options={{ headerShown: true, title: "Not Found" }} />
			</Stack>
		</SafeAreaProvider>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "Montserrat_400Regular_Italic",
	},
	text: {
		fontFamily: "Montserrat_400Regular_Italic",
		color: Colors.text,
	},
});
