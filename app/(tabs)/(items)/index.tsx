import { Text, View, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export default function ItemsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Items Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: Colors.text,
	},
});
