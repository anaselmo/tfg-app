'use client'
import React, { useState, type FC, useEffect, useRef } from 'react'
import { Text, View, TextInput, type TextInputProps, Animated, Easing, type TextStyle } from 'react-native'
import { Controller } from 'react-hook-form'
import Ionicons from 'react-native-vector-icons/Ionicons'

type CustomTextInputProps = {
  control: any
  name: string
  rules?: any
  label: string
  focusColor?: string
  errorColor?: string
  style?: any
} & TextInputProps

const CustomTextInput: FC<CustomTextInputProps> = ({
  control,
  name,
  rules,
  focusColor = 'green',
  errorColor = 'red',
  label,
  style,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasText, setHasText] = useState(false)
  const [error, setError] = useState(false)
  const animatedLabel = useRef(new Animated.Value(hasText || isFocused ? 1 : 0)).current

  const handleFocus = (): void => {
    setIsFocused(true)
    Animated.timing(animatedLabel, {
      toValue: 1,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()
  }

  const handleBlur = (): void => {
    setIsFocused(false)
    if (hasText) return
    Animated.timing(animatedLabel, {
      toValue: 0,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()
  }

  useEffect(() => {
    handleBlur() // Reset the label position and size on initial render
  }, [])

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 5]
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12]
    }),
    color: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: ['#696969', error ? errorColor : isFocused ? focusColor : '#696969']
    })
  }

  return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
          setError(error !== undefined)
          return <>
            <View style={{ paddingVertical: 5 }}>
              <View
                style={{
                  ...style,
                  ...(isFocused ? { borderWidth: 2, borderColor: focusColor } : {}),
                  ...(error !== undefined ? { borderWidth: 2, borderColor: errorColor } : {})
                }}
              >
                <Animated.Text style={labelStyle as Animated.WithAnimatedObject<TextStyle>}>{label}</Animated.Text>
                <TextInput
                  onChangeText={(text) => { setHasText(text !== ''); onChange(text) }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={value}
                  {...rest}
                  style={{ position: 'absolute', width: '100%', height: '110%', borderWidth: 0, borderColor: 'black', bottom: -7, paddingLeft: 10 }}
                />
              </View>
              {error !== undefined &&
                <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', bottom: -5, borderWidth: 0 }}>
                  <Ionicons name='alert-circle-outline' size={20} color={errorColor} style={{ borderWidth: 0, paddingRight: 5 }}/>
                  <Text style={{ color: errorColor, borderWidth: 0 }}>
                    { error.message ?? 'Invalid input'}
                  </Text>
                </View>
              }
            </View>
          </>
        }}
      />

  )
}

export default CustomTextInput
