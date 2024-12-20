import { Text, View, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export default function ListsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Lists screen</Text>
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
