import { Stack } from "expo-router";

export default function ListsLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="activeList" options={{ headerShown: false }} />
		</Stack>
	);
}
