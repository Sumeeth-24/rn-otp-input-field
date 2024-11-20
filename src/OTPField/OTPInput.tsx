import React, { forwardRef, useImperativeHandle } from 'react';
import { TextInput, View, ViewStyle } from 'react-native';
import { OtpInputProps } from './OTPInputProps';
import { useOtpInput } from './useOTPInput';


const OTPInput = forwardRef((props: OtpInputProps, ref) => {
  const {
    otp,
    focusedIndex,
    inputRefs,
    actions: { handleTextChange, handleFocus, handleBlur, handleKeyDown, clear },
  } = useOtpInput(props);

  const { initialPlaceHolder } = props;

  // Use ref to expose the clear function
  useImperativeHandle(ref, () => ({
    clear,
  }));

  

  return (
    <View style={props.containerStyle as ViewStyle}>
      {otp.map((value, index) => (
        <View
          key={index}
          style={[
            props.pinCodeContainerStyle,
            focusedIndex === index && props.focusedPinCodeContainerStyle,
            value ? (props.filledPinCodeContainerStyle as ViewStyle) : undefined,
            props.disabled && { opacity: 0.5 },
            props.isOtpIncorrect && props.incorrectPinCodeContainerStyle 
          ]}
        >
          <TextInput
            ref={(input) => (inputRefs.current[index] = input)}
            testID="otp-input"
            value={value}
            onChangeText={(text) => handleTextChange(index, text)}
            onKeyPress={(e) => handleKeyDown(index, e)}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            placeholder={initialPlaceHolder?.toString()}
            placeholderTextColor={props.placeholderTextColor}
            style={[
              props.pinCodeTextStyle,
              props.disabled && { color: '#555555' },
            ]}
            keyboardType={props.keyboardType}
            selectionColor={props.highlighterColor}
            maxLength={1}
            autoFocus={props.autoFocus}
            caretHidden={props.hideCursor}
            secureTextEntry={props.secureTextEntry}
            aria-disabled={props.disabled}
            editable={!props.disabled}
          />
        </View>
      ))}
    </View>
  );
});

export default OTPInput;
