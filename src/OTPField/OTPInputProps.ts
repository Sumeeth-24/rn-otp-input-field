import { KeyboardTypeOptions, TextStyle, ViewStyle } from 'react-native';

export interface OtpInputProps {
  length: number;
  onOTPFilled?: (otp: string) => void;
  pinCodeContainerStyle: ViewStyle;
  containerStyle: ViewStyle;
  pinCodeTextStyle: TextStyle;
  focusedPinCodeContainerStyle: ViewStyle;
  filledPinCodeContainerStyle: ViewStyle;
  highlighterColor?: string;
  disabled?: boolean;
  autoFocus: boolean;
  keyboardType: KeyboardTypeOptions;
  hideCursor?: boolean;
  isOtpIncorrect?: boolean;
  secureTextEntry?: boolean;
}
