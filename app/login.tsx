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

	const onSignIn = async () => {};
	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior="padding"
			keyboardVerticalOffset={keyboardVerticalOffset}
		>
			<View style={defaultStyles.container}>
				<Text style={defaultStyles.header}>Welcome back</Text>
				<Text style={defaultStyles.descriptionText}>
					Enter the phone number associated with your account
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
				<TouchableOpacity
					onPress={onSignIn}
					style={[
						defaultStyles.pillButton,
						mobileNumber !== "" ? styles.enabled : styles.disabled,
						{ marginBottom: 20 },
					]}
				>
					<Text style={defaultStyles.buttonText}>Continue</Text>
				</TouchableOpacity>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 16,
					}}
				></View>
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
