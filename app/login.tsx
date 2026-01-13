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
import Ionicons from "@expo/vector-icons/Ionicons";

enum SignInType {
	Phone,
	Email,
	Google,
	Apple,
}

const Page = () => {
	const [countryCode, setCountryCode] = useState("+971");
	const [mobileNumber, setMobileNumber] = useState("");
	const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;

	const onSignIn = async (type: SignInType) => {};
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
					onPress={() => onSignIn(SignInType.Phone)}
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
				>
					<View
						style={{
							flex: 1,
							height: StyleSheet.hairlineWidth,
							backgroundColor: Colors.gray,
						}}
					></View>
					<Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
					<View
						style={{
							flex: 1,
							height: StyleSheet.hairlineWidth,
							backgroundColor: Colors.gray,
						}}
					></View>
				</View>
				<TouchableOpacity
					onPress={() => onSignIn(SignInType.Email)}
					style={[
						defaultStyles.pillButton,
						{
							flexDirection: "row",
							gap: 16,
							marginTop: 20,
							backgroundColor: "#ffff",
						},
					]}
				>
					<Ionicons name="mail" size={24} color={"#000"} />
					<Text style={[defaultStyles.buttonText, { color: "#000" }]}>
						Continue with Email
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => onSignIn(SignInType.Google)}
					style={[
						defaultStyles.pillButton,
						{
							flexDirection: "row",
							gap: 16,
							marginTop: 20,
							backgroundColor: "#ffff",
						},
					]}
				>
					<Ionicons name="logo-google" size={24} color={"#000"} />
					<Text style={[defaultStyles.buttonText, { color: "#000" }]}>
						Continue with Google
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => onSignIn(SignInType.Google)}
					style={[
						defaultStyles.pillButton,
						{
							flexDirection: "row",
							gap: 16,
							marginTop: 20,
							backgroundColor: "#ffff",
						},
					]}
				>
					<Ionicons name="logo-apple" size={24} color={"#000"} />
					<Text style={[defaultStyles.buttonText, { color: "#000" }]}>
						Continue with Apple
					</Text>
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
