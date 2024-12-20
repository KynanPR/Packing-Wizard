import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import Colors from "@/constants/Colors";

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Oops! Not Found" }} />
			<View style={styles.container}>
				<Text style={styles.text}>Oops! Not Found</Text>
				<Link href="/" style={styles.button}>
					Go back to Home screen!
				</Link>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: Colors.text,
	},
	button: {
		fontSize: 20,
		textDecorationLine: "underline",
		color: "#fff",
	},
});
