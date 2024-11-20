import { ColorValue, KeyboardTypeOptions, TextStyle, ViewStyle } from 'react-native';

export interface OtpInputProps {
  length: number;
  initialPlaceHolder?: number | string;
  onCodeChanged?: (otp: string) => void;
  onOTPFilled?: (otp: string) => void;
  pinCodeContainerStyle: ViewStyle;
  incorrectPinCodeContainerStyle?: ViewStyle,
  placeholderTextColor?: ColorValue | string;
  containerStyle: ViewStyle;
  pinCodeTextStyle: TextStyle;
  focusedPinCodeContainerStyle?: ViewStyle;
  filledPinCodeContainerStyle?: ViewStyle;
  highlighterColor?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  keyboardType?: KeyboardTypeOptions;
  hideCursor?: boolean;
  isOtpIncorrect?: boolean;
  secureTextEntry?: boolean;
}
