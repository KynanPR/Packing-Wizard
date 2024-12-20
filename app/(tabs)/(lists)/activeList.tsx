import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import ListItem from "@/components/ListItem";
import CategoryAccordion from "@/components/CategoryAccordian";
import { FlashList } from "@shopify/flash-list";
import CustomText from "@/components/CustomText";
import Accordion from "react-native-collapsible/Accordion";
import { useState } from "react";

const catergories = [
	{ categoryName: "Clothes", items: ["Shirt", "Pants", "Socks"] },
	{ categoryName: "Food", items: ["Apple", "Banana", "Orange"] },
];

// class AccordionView extends Component {
// 	state = {
// 		activeSections: [],
// 	};

// _renderSectionTitle = (section) => {
// 	return (
// 		<View style={styles.content}>
// 			<Text>{section.content}</Text>
// 		</View>
// 	);
// };

// _renderHeader = (section) => {
// 	return (
// 		<View style={styles.header}>
// 			<Text style={styles.headerText}>{section.title}</Text>
// 		</View>
// 	);
// };

// _renderContent = (section) => {
// 	return (
// 		<View style={styles.content}>
// 			<Text>{section.content}</Text>
// 		</View>
// 	);
// };

// _updateSections = (activeSections) => {
// 	this.setState({ activeSections });
// };
//
// 	render() {
// 		return (
// 			<Accordion
// 				sections={SECTIONS}
// 				activeSections={this.state.activeSections}
// 				renderSectionTitle={this._renderSectionTitle}
// 				renderHeader={this._renderHeader}
// 				renderContent={this._renderContent}
// 				onChange={this._updateSections}
// 			/>
// 		);
// 	}
// }

export default function ActiveList() {
	const [activeSections, setActiveSections] = useState<number[]>([]);
	const [collapsed, setCollapsed] = useState(true);
	const [multipleSelect, setMultipleSelect] = useState(false);

	return (
		<View style={styles.container}>
			<ScrollView style={styles.categoryContainer}>
				<CategoryAccordion catergories={catergories}></CategoryAccordion>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		// width: 500,
	},
	categoryContainer: {
		width: "90%",
		height: "100%",
	},
	collapsible: {
		width: "100%",
		backgroundColor: "lightgray", // Add a background color to make it visible
	},
	button: {
		fontSize: 20,
		textDecorationLine: "underline",
		color: Colors.text,
	},
});
