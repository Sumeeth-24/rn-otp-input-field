import { StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import OTPInput from './OTPInput'
import { router } from 'expo-router';

const OTPField = () => {
    const [isOtpIncorrect, setIsOtpIncorrect] = useState<boolean>(false);
    const otpRef = useRef<{ clear: () => void }>(null);

    const onOtpSubmit = (otp: string) => {
        const correctOtp = "123456";
        if(otp === correctOtp){
            console.log("Login Successful", otp);
            setIsOtpIncorrect(false);
            router.replace("/onboarding");
        } else {
            setIsOtpIncorrect(true);
            otpRef.current?.clear(); // Clear OTP input if incorrect
        }
    }

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
  )
}

export default OTPField

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        gap: 2,
        flexDirection: "row",
        justifyContent: 'center'
    },
    otpContainer: {
        width: 50,
        height: 50,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#434343",
        borderRadius: 15
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
    filledContainer: {backgroundColor: "#474747"}
})