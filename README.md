# react-native-otp-ui-kit

`react-native-otp-ui-kit` is a simple and highly customizable React Native component for entering OTP (One-Time Password) on iOS, Android, and Web. It provides an intuitive and user-friendly interface for inputting one-time passwords in your React Native applications.

## Features

- **Easy to Use**: Simple and efficient OTP input component.
- **Highly Customizable**: Customize styling and behavior to match your app.
- **Cross-Platform Support**: Works seamlessly with React Native, Expo, and React Native Web.
- **TypeScript Support**: Fully typed for type safety and ease of development.

## Demo

![ScreenRecording2024-11-10120724-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/f5bb4ef4-9af1-46c1-befd-511b353b012d)

## Installation

Install `react-native-otp-ui-kit` using npm or yarn:

```bash
npm install react-native-otp-ui-kit
# or
yarn add react-native-otp-ui-kit


Usage

import { StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { router } from 'expo-router';
import { OTPInput } from "react-native-otp-ui-kit";

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
            <OTPInput
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
```

## Props

| Prop                           | Type                      |    Description                                     |
|-----------------------------   |---------------------------|----------------------------------------------------|
| `length`                       | `number`                  | The number of OTP digits.                          |
| `keyboardType`                 | `'numeric' or 'default'`  | The keyboard type for input.                       |
| `isOtpIncorrect`               | `boolean`                 | Flag to indicate incorrect OTP styling.            |
| `onOTPFilled`                  | `(otp: string) => void`   | Callback when OTP is filled.                       |
| `containerStyle`               | `ViewStyle`               | Style for the OTP container.                       |
| `pinCodeContainerStyle`        | `ViewStyle`               | Style for each OTP input box.                      |
| `pinCodeTextStyle`             | `TextStyle`               | Style for the OTP text.                            |
| `focusedPinCodeContainerStyle` | `ViewStyle`               | Style when an OTP box is focused.                  |
| `filledPinCodeContainerStyle`  | `ViewStyle`               | Style when an OTP box has a value.                 |
| `autoFocus`                    | `boolean` (default: true) | Automatically focus the input on mount.            |
| `highlighterColor`             | `ColorValue`              | Color for the input field highlighter.             |
| `secureTextEntry`              | `boolean` (default: false | Obscures text for security.                        |
| `disabled`                     | `boolean` (default: false)| Disables the input.                                |
| ...                            | Other TextInput props     | Pass any other `TextInput` props as needed.        |


## Methods (Ref)

| Method         | Type                     | Description                   |
|----------------|--------------------------|-------------------------------|
| `clear`        | `() => void`             | Clears the OTP input.         |
| `focus`        | `() => void`             | Focuses the OTP input.        |
| `setValue`     | `(value: string) => void`| Sets the OTP input value.     |


## Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests.

If you find a bug or have any feature requests, please open an issue :)

## Support Me

If you find this project useful, consider giving it a star ⭐ and helping it grow! Contribute to making this the ultimate one-stop OTP solution. Your contributions and feedback are highly appreciated!

