import React from "react";
import { TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import { Link, router, Stack } from "expo-router";
import IonIcons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="signup"
				options={{
					title: "",
					headerBackTitle: "",
					headerShadowVisible: false,
					headerStyle: { backgroundColor: Colors.background },
					headerLeft: () => (
						<TouchableOpacity onPress={router.back}>
							<IonIcons
								name="arrow-back"
								size={22}
								color={Colors.dark}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen
				name="login"
				options={{
					title: "",
					headerBackTitle: "",
					headerShadowVisible: false,
					headerStyle: { backgroundColor: Colors.background },
					headerLeft: () => (
						<TouchableOpacity onPress={router.back}>
							<IonIcons
								name="arrow-back"
								size={22}
								color={Colors.dark}
							/>
						</TouchableOpacity>
					),
					headerRight: () => (
						<Link href={"/help"} asChild>
							<TouchableOpacity>
								<IonIcons
									name="help-circle-outline"
									size={34}
									color={Colors.dark}
								/>
							</TouchableOpacity>
						</Link>
					),
				}}
			/>
			<Stack.Screen
				name="help"
				options={{ title: "Help", presentation: "modal" }}
			/>
		</Stack>
	);
}
