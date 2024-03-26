'use client'
import React, { useState, type FC, useEffect, useRef } from 'react'
import {
  Text,
  View,
  TextInput,
  Animated,
  Easing,
  type TextStyle,
  Pressable,
  type ViewProps,
  type TextInputProps
} from 'react-native'
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
  secureTextEntry?: boolean
  keyboardType?: TextInputProps['keyboardType']
} & ViewProps &
  TextInputProps

const CustomTextInput: FC<CustomTextInputProps> = ({
  control,
  name,
  rules,
  focusColor = 'green',
  errorColor = 'red',
  label,
  style,
  secureTextEntry = false,
  keyboardType = 'default',
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasText, setHasText] = useState(false)
  const [error, setError] = useState(false)
  const animatedLabel = useRef(new Animated.Value(hasText || isFocused ? 1 : 0)).current
  const [passwordVisibility, setPasswordVisibility] = useState(!secureTextEntry)
  const animatedMargin = useRef(new Animated.Value(error ? 15 : 0)).current
  const [isErrorVisible, setIsErrorVisible] = useState(false)
  const textInputRef = useRef<TextInput>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [errorLines, setErrorLines] = useState(0)
  const [componentHeight, setComponentHeight] = useState(0)
  const [componentWidth, setComponentWidth] = useState(0)

  useEffect(() => {
    handleBlur() // Reset the label position and size on initial render
  }, [])

  useEffect(() => {
    console.log('errorLines', errorLines)
    console.log('errorMessage', errorMessage)
    Animated.timing(animatedMargin, {
      toValue: error && errorMessage.length > 0 ? 15 * errorLines : 0,
      duration: 150, // Duración en milisegundos
      useNativeDriver: false // Ahora puedes usar el controlador nativo
    }).start(() => {
      setIsErrorVisible(error && errorMessage.length > 0)
    })
  }, [error, errorLines, errorMessage])

  const onTogglePasswordVisibility = (): void => {
    console.log('passwordVisibility', passwordVisibility)
    setPasswordVisibility(!passwordVisibility)
  }

  const handleFocusChange = (focused: boolean): void => {
    setIsFocused(focused)
    const toValue = focused ? 1 : hasText ? 1 : 0
    Animated.timing(animatedLabel, {
      toValue,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()
  }

  const handleFocus = (): void => {
    handleFocusChange(true)
  }

  const handleBlur = (): void => {
    handleFocusChange(false)
  }

  const labelStyle = {
    position: 'absolute',
    left: 20,
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [componentHeight / 4.3, componentHeight / 10]
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
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error: errorState }
      }) => {
        useEffect(() => {
          setHasText(value !== undefined && value !== '')
          setError(errorState !== undefined)
          if (errorState?.message !== undefined) {
            setErrorMessage(errorState.message)
            console.log('errorState.message', errorState.message)
          }
        }, [value, errorState])
        return (
          <>
            <View>
              <Pressable
                onPress={() => {
                  textInputRef.current?.focus()
                }}
              >
                <Animated.View
                  style={{
                    ...style,
                    borderWidth: 2,
                    borderColor: '#F0F0F0',
                    ...(isFocused ? { borderColor: focusColor } : {}),
                    ...(errorState !== undefined ? { borderColor: errorColor } : {}),
                    marginBottom: animatedMargin
                  }}
                  onLayout={event => {
                    const { height, width } = event.nativeEvent.layout
                    console.log('height', height)
                    console.log('width', width)
                    setComponentHeight(height)
                    setComponentWidth(width)
                  }}
                >
                  <Animated.Text
                    style={labelStyle as Animated.WithAnimatedObject<TextStyle>}
                  >
                    {label}
                  </Animated.Text>
                  <TextInput
                    ref={textInputRef}
                    onChangeText={text => {
                      if (keyboardType !== 'numeric') {
                        onChange(text)
                        return
                      }
                      // Reemplazar comas por puntos
                      const normalizedText = text.replace(/,/g, '.')

                      if (normalizedText === '' || normalizedText === '.') {
                        onChange(normalizedText)
                      } else if (!isNaN(Number(normalizedText))) {
                        // Permitir la entrada si el texto es un número válido
                        onChange(normalizedText)
                      }
                    }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    secureTextEntry={!passwordVisibility}
                    keyboardType={keyboardType}
                    {...rest}
                    style={{
                      flex: 1, // Cambio sugerido
                      borderWidth: 0,
                      borderColor: 'black',
                      paddingLeft: 10,
                      // marginTop: 15
                      bottom: -7
                    }}
                  />
                  {secureTextEntry && (
                    <Pressable
                      onPress={onTogglePasswordVisibility}
                      style={{
                        position: 'absolute',
                        flex: 1,
                        right: 0,
                        marginRight: 10,
                        padding: 10,
                        borderWidth: 0
                      }}
                    >
                      <Ionicons
                        name={passwordVisibility ? 'eye-off' : 'eye'}
                        size={25}
                        color={'#696969'}
                      />
                    </Pressable>
                  )}
                </Animated.View>
              </Pressable>
              {isErrorVisible && errorState !== undefined && (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: -5,
                    borderWidth: 0
                  }}
                >
                  <Ionicons
                    name="alert-circle-outline"
                    size={20}
                    color={errorColor}
                    style={{ borderWidth: 0, paddingRight: 5 }}
                  />
                  <Text
                    onTextLayout={({ nativeEvent: { lines } }) => {
                      console.log('lines', lines.length)
                      setErrorLines(lines.length)
                    }}
                    style={{ color: errorColor, borderWidth: 0 }}
                  >
                    {errorState.message ?? 'Invalid input'}
                  </Text>
                </View>
              )}
            </View>
          </>
        )
      }}
    />
  )
}

export default CustomTextInput
