import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from "react-native";

import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
	const [countryCode, setCountryCode] = useState("+971");
	const [mobileNumber, setMobileNumber] = useState("");
	const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;

	const onSigup = async () => {};
	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior="padding"
			keyboardVerticalOffset={keyboardVerticalOffset}
		>
			<View style={defaultStyles.container}>
				<Text style={defaultStyles.header}>Let's get started!</Text>
				<Text style={defaultStyles.descriptionText}>
					Enter your phone number. We will send you a confirmation
					code there
				</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Country Code"
						keyboardType="numeric"
						placeholderTextColor={Colors.gray}
						value={countryCode}
						onChangeText={setCountryCode}
					/>
					<TextInput
						style={[styles.input, { flex: 1 }]}
						placeholderTextColor={Colors.gray}
						placeholder="Mobile Number"
						keyboardType="numeric"
						value={mobileNumber}
						onChangeText={setMobileNumber}
					/>
				</View>
				<Link href={"/login"} replace asChild>
					<TouchableOpacity>
						<Text style={defaultStyles.textLink}>
							Already have an account? Log In
						</Text>
					</TouchableOpacity>
				</Link>
				<View style={{ flex: 1 }} />
				<TouchableOpacity
					style={[
						defaultStyles.pillButton,
						mobileNumber !== "" ? styles.enabled : styles.disabled,
						{ marginTop: 20 },
					]}
				>
					<Text style={defaultStyles.buttonText}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Page;

const styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 40,
		flexDirection: "row",
	},
	input: {
		backgroundColor: Colors.lightGray,
		padding: 20,
		borderRadius: 16,
		fontSize: 20,
		marginRight: 10,
	},
	enabled: { backgroundColor: Colors.primary },
	disabled: {
		backgroundColor: Colors.primaryMuted,
	},
});
