/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { Text, TouchableOpacity, View, type StyleProp, type ViewStyle, Alert, type TextStyle } from 'react-native'
import { LinearGradient, type LinearGradientProps } from 'expo-linear-gradient'

interface CustomButtonProps {
  text?: string
  onPress?: () => void
  gradient?: LinearGradientProps
  buttonStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const defaultValues: CustomButtonProps = {
  text: 'Button',
  onPress: () => { Alert.alert('Button pressed') },
  gradient: { colors: ['transparent', 'transparent'] },
  buttonStyle: { flex: 1 },
  textStyle: { color: 'black', flex: 1 }
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text = defaultValues.text!,
  onPress = defaultValues.onPress!,
  gradient = defaultValues.gradient!,
  buttonStyle = defaultValues.buttonStyle!,
  textStyle = defaultValues.textStyle!
}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={gradient.colors}
        start={gradient.start}
        end={gradient.end}
        style={buttonStyle}
      >
        <Text style={textStyle}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default CustomButton
