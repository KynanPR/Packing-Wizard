import { Text, View, StyleSheet, Pressable } from "react-native";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import Colors from "../constants/Colors";
import CustomText from "./CustomText";

interface ListItemProps {
	name: string;
}

export default function ListItem(props: ListItemProps) {
	const [isChecked, setChecked] = useState(false);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: "row",
			alignItems: "center",
			flexBasis: 100,
			gap: 25,
			backgroundColor: Colors.grey,
			padding: 20,
			marginTop: 5,
			marginBottom: 5,
			marginLeft: 10,
			marginRight: 10,
			borderRadius: 10,
			minHeight: 50,
		},
		checkboxContainer: {
			borderRadius: 10,
			width: 25,
			height: 25,
			overflow: "hidden",
		},
		checkbox: {
			width: 25,
			height: 25,
			borderRadius: "25%",
		},
		customText: {
			textDecorationLine: isChecked ? "line-through" : "none",
			color: isChecked ? Colors.textGrey : Colors.text,
		},
	});

	return (
		// <View style={styles.container}>
		<Pressable
			onPress={() => setChecked(!isChecked)}
			style={({ pressed }) => [
				{ backgroundColor: pressed ? Colors.error : null },
				styles.container,
			]}
		>
			{/* <View style={styles.checkboxContainer}> */}
			<Checkbox
				style={styles.checkbox}
				color={Colors.primary}
				value={isChecked}
				onValueChange={setChecked}
			/>
			{/* </View> */}
			<CustomText style={styles.customText}>{props.name}</CustomText>
		</Pressable>
		// </View>
	);
}
