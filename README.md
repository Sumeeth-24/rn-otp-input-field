# react-native-otp-input-field

`react-native-otp-input-field` is a simple and highly customizable React Native component for entering OTP (One-Time Password) on iOS, Android, and Web. It provides an intuitive and user-friendly interface for inputting one-time passwords in your React Native applications.

## Features

- **Easy to Use**: Simple and efficient OTP input component.
- **Highly Customizable**: Customize styling and behavior to match your app.
- **Cross-Platform Support**: Works seamlessly with React Native, Expo, and React Native Web.
- **TypeScript Support**: Fully typed for type safety and ease of development.

## Installation

Install `react-native-otp-input-field` using npm or yarn:

```bash
npm install react-native-otp-input-field
# or
yarn add react-native-otp-input-field


Usage

import { StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { router } from 'expo-router';
import { OtpInput } from "react-native-otp-input-field";

const OTPField = () => {
    const [isOtpIncorrect, setIsOtpIncorrect] = useState<boolean>(false);
    const otpRef = useRef<{ clear: () => void }>(null);

    const onOtpSubmit = (otp: string) => {
        const correctOtp = "123456";
        if (otp === correctOtp) {
            console.log("Login Successful", otp);
            setIsOtpIncorrect(false);
            router.replace("/onboarding");
        } else {
            setIsOtpIncorrect(true);
            otpRef.current?.clear();
        }
    };

    return (
        <View>
            <OtpInput
                ref={otpRef}
                length={6}
                onOTPFilled={onOtpSubmit}
                containerStyle={styles.container}
                pinCodeContainerStyle={styles.otpContainer}
                pinCodeTextStyle={styles.pinCodeText}
                focusedPinCodeContainerStyle={styles.focusContainer}
                filledPinCodeContainerStyle={styles.filledContainer}
                keyboardType="numeric"
                isOtpIncorrect={isOtpIncorrect}
                highlighterColor="orange"
                hideCursor={false}
                autoFocus={true}
                secureTextEntry={false}
                disabled={false}
            />
        </View>
    );
};

export default OTPField;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        gap: 2,
        flexDirection: "row",
        justifyContent: 'center',
    },
    otpContainer: {
        width: 50,
        height: 50,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#434343",
        borderRadius: 15,
    },
    pinCodeText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "700",
        color: "#FFFFFF",
    },
    focusContainer: {
        borderColor: "blue",
    },
    filledContainer: {
        backgroundColor: "#474747",
    },
});

## Props

<table>
   <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Description</th>
   </tr>
   <tr>
      <td><code>length</code></td>
      <td><code>number</code></td>
      <td>The number of OTP digits.</td>
   </tr>
   <tr>
      <td><code>keyboardType</code></td>
      <td><code>'numeric' or 'default'</code></td>
      <td>The keyboard type for input.</td>
   </tr>
   <tr>
      <td><code>isOtpIncorrect</code></td>
      <td><code>boolean</code></td>
      <td>Flag to indicate incorrect OTP styling.</td>
   </tr>
   <tr>
      <td><code>onOTPFilled</code></td>
      <td><code>(otp: string) => void</code></td>
      <td>Callback when OTP is filled.</td>
   </tr>
   <tr>
      <td><code>containerStyle</code></td>
      <td><code>ViewStyle</code></td>
      <td>Style for the OTP container.</td>
   </tr>
   <tr>
      <td><code>pinCodeContainerStyle</code></td>
      <td><code>ViewStyle</code></td>
      <td>Style for each OTP input box.</td>
   </tr>
   <tr>
      <td><code>pinCodeTextStyle</code></td>
      <td><code>TextStyle</code></td>
      <td>Style for the OTP text.</td>
   </tr>
   <tr>
      <td><code>focusedPinCodeContainerStyle</code></td>
      <td><code>ViewStyle</code></td>
      <td>Style when an OTP box is focused.</td>
   </tr>
   <tr>
      <td><code>filledPinCodeContainerStyle</code></td>
      <td><code>ViewStyle</code></td>
      <td>Style when an OTP box has a value.</td>
   </tr>
   <tr>
      <td><code>autoFocus</code></td>
      <td><code>boolean</code> (default: true)</td>
      <td>Automatically focus the input on mount.</td>
   </tr>
   <tr>
      <td><code>highlighterColor</code></td>
      <td><code>ColorValue</code></td>
      <td>Color for the input field highlighter.</td>
   </tr>
   <tr>
      <td><code>secureTextEntry</code></td>
      <td><code>boolean</code> (default: false)</td>
      <td>Obscures text for security.</td>
   </tr>
   <tr>
      <td><code>disabled</code></td>
      <td><code>boolean</code> (default: false)</td>
      <td>Disables the input.</td>
   </tr>
   <tr>
      <td>...</td>
      <td>Other TextInput props</td>
      <td>Pass any other <code>TextInput</code> props as needed.</td>
   </tr>
</table>


## Methods (Ref)

| Method         | Type                     | Description                   |
|----------------|--------------------------|-------------------------------|
| `clear`        | `() => void`             | Clears the OTP input.         |
| `focus`        | `() => void`             | Focuses the OTP input.        |
| `setValue`     | `(value: string) => void`| Sets the OTP input value.     |


## Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests.

If you find a bug or have any feature requests, please open an issue :)
