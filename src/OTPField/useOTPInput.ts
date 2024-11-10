import { useEffect, useRef, useState } from 'react';
import {  TextInput } from 'react-native';
import { OtpInputProps } from './OTPInputProps';


interface UseOtpInputProps extends OtpInputProps {
  length: number;
}

export const useOtpInput = ({
    length,
    onOTPFilled,
    disabled = false,
    autoFocus = true,
  }: UseOtpInputProps) => {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const inputRefs = useRef<Array<TextInput | null>>([]);
  
    // Automatically focus the first input on mount if autofocus is true
    useEffect(() => {
      if (autoFocus) {
        inputRefs.current[0]?.focus();
      }
    }, [autoFocus]);
  
    const handleTextChange = (index: number, text: string) => {
      if (isNaN(Number(text)) || disabled) return;
  
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
  
      const combinedOtp = newOtp.join('');
      if (combinedOtp.length === length && onOTPFilled) {
        onOTPFilled(combinedOtp);
      }
  
      // Move to next input if there's text and it's not the last field
      if (text && index < otp.length - 1) {
        let nextIndex = index + 1;
        while (nextIndex < otp.length && newOtp[nextIndex]) {
          nextIndex++;
        }
        inputRefs.current[nextIndex]?.focus();
      }
    };
  
    const handleFocus = (index: number) => {
        // Get the index of the first empty OTP field
        const firstEmptyIndex = otp.indexOf('');
      
        let targetIndex = index;
        
        // Check if the user is moving backward and focus the previous empty field
        if (otp[index]) {
          targetIndex = index;
        } else if (firstEmptyIndex !== -1) {
          // If there is an empty field, focus the first empty field
          targetIndex = firstEmptyIndex;
        } else {
          // If no empty field, maintain focus on the current index 
          targetIndex = index;
        }
      
        setFocusedIndex(targetIndex);  // Update the focused index
        inputRefs.current[targetIndex]?.focus();  // Focus the input field
      };
      
  
    const handleBlur = () => {
      setFocusedIndex(null);
    };
  
    const handleKeyDown = (index: number, event: { nativeEvent: { key: string } }) => {
      if (event.nativeEvent.key === 'Backspace' && index > 0) {
        const newOtp = [...otp];
        if (!newOtp[index]) {
          // Move to the previous empty field if the current is empty
          const prevIndex = otp.slice(0, index).lastIndexOf('');
          inputRefs.current[prevIndex !== -1 ? prevIndex : index - 1]?.focus();
        } else {
          // Clear the current OTP field
          newOtp[index] = '';
          setOtp(newOtp);
        }
      }
    };
  
    const clear = () => {
      setOtp(Array(length).fill(''));
      inputRefs.current[0]?.focus();
    };
  
    return {
      otp,
      focusedIndex,
      inputRefs,
      actions: {
        handleTextChange,
        handleFocus,
        handleBlur,
        handleKeyDown,
        clear,
      },
    };
  };