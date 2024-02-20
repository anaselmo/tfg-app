/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { View, type StyleProp, type ViewStyle } from 'react-native'
import { LinearGradient, type LinearGradientProps } from 'expo-linear-gradient'

interface BackgroundProps {
  gradient?: LinearGradientProps
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const defaultValues: BackgroundProps = {
  gradient: { colors: ['#FFFFFF', '#FFFFFF'] },
  style: { flex: 1 }
}

const Background: React.FC<BackgroundProps> = ({
  gradient = defaultValues.gradient!,
  style = defaultValues.style!,
  children
}: BackgroundProps) => {
  return (
    <View style={style}>
    <LinearGradient {...gradient} style={{ flex: 1 }}>
        {children}
    </LinearGradient>
    </View>
  )
}

export default Background
