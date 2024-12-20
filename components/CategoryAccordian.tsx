import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import Colors from "../constants/Colors";
import CustomText from "./CustomText";
import Accordion from "react-native-collapsible/Accordion";
import { FlashList } from "@shopify/flash-list";

import ListItem from "./ListItem";

type Catergory = {
	categoryName: string;
	items: string[];
};

interface CategoryAccordionProps {
	catergories: Catergory[];
}

export default function CategoryAccordion(props: CategoryAccordionProps) {
	const [activeCategories, setActiveCategories] = useState<number[]>([]);

	const styles = StyleSheet.create({
		categoryContainer: {
			marginBottom: 10,
		},
		header: {
			backgroundColor: Colors.grey,
			padding: 20,
			borderTopLeftRadius: 10,
			borderTopRightRadius: 10,
			borderBottomLeftRadius: 10,
			borderBottomRightRadius: 10,
		},
		headerActive: {
			borderBottomLeftRadius: 0,
			borderBottomRightRadius: 0,
		},
		headerText: {
			color: Colors.text,
			fontSize: 20,
		},
		collapsible: {
			// width: 500,
			// height: 200,
		},
		flashListContainer: {
			// flex: 1,
			width: "100%",
			height: "100%",
			borderBottomLeftRadius: 10,
			borderBottomRightRadius: 10,
			overflow: "hidden",
		},
		flashList: {
			backgroundColor: Colors.grey,
		},
		text: {
			width: 100,
			height: 100,
		},
	});

	function renderHeader(category: Catergory, _: any, isActive: boolean) {
		return (
			<View style={[styles.header, isActive ? styles.headerActive : styles.header]}>
				<CustomText style={styles.headerText}>{category.categoryName}</CustomText>
			</View>
		);
	}
	function renderContent(category: Catergory, _: any, isActive: boolean) {
		return (
			<View style={styles.flashListContainer} collapsable={false}>
				<FlashList
					data={category.items}
					renderItem={({ item }) => <ListItem name={item}></ListItem>}
					estimatedItemSize={50}
					contentContainerStyle={styles.flashList}
				></FlashList>
			</View>
		);
	}
	return (
		<View style={styles.collapsible}>
			<Accordion
				activeSections={activeCategories}
				sections={props.catergories}
				touchableComponent={TouchableOpacity}
				expandMultiple={true}
				renderHeader={renderHeader}
				renderContent={renderContent}
				duration={400}
				onChange={setActiveCategories}
				underlayColor={Colors.background}
				sectionContainerStyle={styles.categoryContainer}
			/>
		</View>
	);
}
() => {};
