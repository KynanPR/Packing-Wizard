import { Text, TextProps, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

interface CustomTextProps extends TextProps {
	weight?: "bold" | "normal" | "italic";
	children: React.ReactNode;
}

export default function CustomText({ children, ...props }: CustomTextProps) {
	const styles = StyleSheet.create({
		text: {
			color: Colors.text,
			fontSize: 20,
			fontFamily: getFontFamily(props.weight),
			fontWeight: props.weight === "bold" ? "bold" : "normal",
			fontStyle: props.weight === "italic" ? "italic" : "normal",
		},
	});

	return <Text style={[styles.text, props.style]}>{children}</Text>;
}

function getFontFamily(weight?: "bold" | "normal" | "italic"): string {
	switch (weight) {
		case "bold":
			return "Montserrat_700Bold";
		case "italic":
			return "Montserrat_400Regular_Italic";
		default:
			return "Montserrat_400Regular";
	}
}
