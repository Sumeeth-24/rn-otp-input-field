import { Button, StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import OTPInput from './OTPInput'
import { router } from 'expo-router';

const OTPField = () => {
    const [isOtpIncorrect, setIsOtpIncorrect] = useState<boolean>(false);
    const [code, setCode] = useState<string>('');
    const otpRef = useRef<{ clear: () => void }>(null);

    const onChangeOTP = (e: string) => {
        setCode(e);
    }

    const verifyChallenge = (value: string) => {
        const correctOtp = "123456";
        if(value === correctOtp){
            setIsOtpIncorrect(false);
            // YOUR logic code goes here
            router.navigate('/onboarding')
        } else {
            setIsOtpIncorrect(true);
            otpRef.current?.clear(); // Clear OTP input if incorrect
        }
    }

    const handleAutomaticVerification = (otp: string) => {
            verifyChallenge(otp);
     }

    const handleManualVerification = () => {
        verifyChallenge(code);   
      };

  return (
    <View>
      <OTPInput
        ref={otpRef}
        length={6}
        initialPlaceHolder={''}
        onCodeChanged={onChangeOTP}
        onOTPFilled={handleAutomaticVerification}
        containerStyle={styles.container}
        placeholderTextColor="blue"
        pinCodeContainerStyle={styles.otpContainer}
        pinCodeTextStyle={styles.pinCodeText}
        focusedPinCodeContainerStyle={styles.focusContainer}
        filledPinCodeContainerStyle={styles.filledContainer}
        incorrectPinCodeContainerStyle={styles.incorrectPinCodeContainerStyle}
        keyboardType="numeric"
        isOtpIncorrect={isOtpIncorrect}
        highlighterColor="orange"
        hideCursor={true}
        autoFocus={true}
        secureTextEntry={false}
        disabled={false}
      />

        <Button title="Verify OTP" onPress={handleManualVerification} />

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
        fontSize: 15,
        fontWeight: "400",
        color: "#D2D2D2",
    },
    focusContainer: {
        borderColor: "blue",
    },
    filledContainer: {backgroundColor: "#474747"},
    incorrectPinCodeContainerStyle: {
        borderColor: 'red',
        borderWidth: 1,
      },
})