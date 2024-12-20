import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Colors from "../../constants/Colors";
import { useSafeAreaInsets, SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
	const insets = useSafeAreaInsets();
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: insets.top,
			paddingBottom: insets.bottom,
			paddingLeft: insets.left,
			paddingRight: insets.right,
			backgroundColor: Colors.background,
			alignItems: "center",
			justifyContent: "center",
		},
		text: {
			color: Colors.text,
		},
		button: {
			fontSize: 20,
			textDecorationLine: "underline",
			color: Colors.text,
		},
	});

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home screen</Text>
			<Link href="/(tabs)/(lists)/activeList" style={styles.button}>
				Go to Active List screen
			</Link>
		</View>
	);
}
