// 'use client'
import React, { useEffect, useState } from 'react'
import { Alert, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import CustomButton from '../components/custom-button.component'
import Background from '../components/background.component'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { type WelcomeScreenNavigationProp } from './welcome-screen'
import * as authScreen from '../styles/auth-screen.style'
import * as authButton from '../styles/shared/auth-button.style'
import { useForm } from 'react-hook-form'
import CustomTextInput from '@components/custom-input.component'
import { useAuthStore } from '@/lib/store'

interface AuthScreenProps {
  navigation: WelcomeScreenNavigationProp
}

interface FormData {
  name: string
  email: string
  password: string
}

export default function AuthScreen ({ navigation }: AuthScreenProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { handleSubmit, control, formState: { errors }, watch } = useForm<FormData>()
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)
  // TODO: try to find out why getParam is failing yet working 🤔
  const [isRegisterScreen, setAuthMethod] = useState<boolean>(navigation.getParam('authMethod') === 'register')
  const [loading, setLoading] = useState(false)
  const { signInBrute } = useAuthStore()

  useEffect(() => {
    console.log('loading: ', loading)
  }, [loading])

  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('data:', data)
      Alert.alert('data', JSON.stringify(data))
      // signInBrute()
      setLoading(false)
    } catch (err) {
      console.error('Error:', err)
      Alert.alert('Error:', JSON.stringify(err))
      setLoading(false)
    }
  }

  const toggleAuthMethod = (): void => {
    setAuthMethod(!isRegisterScreen)
  }

  const togglePasswordVisibility = (): void => {
    console.log('Before Toggle:', secureTextEntry)
    setSecureTextEntry(!secureTextEntry)
    console.log('After Toggle:', secureTextEntry)
  }

  const goBack = (): void => {
    navigation.goBack()
  }

  return (
    <Background
      gradient={{
        colors: ['#0F0F0F', '#202020'],
        start: { x: 0, y: 0.6 },
        end: { x: 1, y: 0.1 }
      }}
    >
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={authScreen.styles.screenWrapper}>
        <View style={authScreen.styles.header}>
          <View style={authScreen.styles.headerLeft}>
            <CustomButton
              text='&lt;'
              onPress={goBack}
              buttonStyle={authScreen.styles.backButton}
              textStyle={authScreen.styles.headerGoBackText}
            />
          </View>
          <View style={authScreen.styles.headerRight}>
              <Text
                style={authScreen.styles.headerAuthText}
              >{(isRegisterScreen) ? headerText.registerMode : headerText.loginMode}</Text>
              <CustomButton
                text={(isRegisterScreen) ? headerButtonText.registerMode : headerButtonText.loginMode}
                onPress={toggleAuthMethod}
                buttonStyle={authScreen.styles.goToButton}
                textStyle={authScreen.styles.headerButtonText}
              />
          </View>
        </View>

        <View style={authScreen.styles.center}>
          <Text style={authScreen.styles.centerText}>
            {(isRegisterScreen) ? centerText.registerMode : centerText.loginMode}
          </Text>
        </View>

        <View style={authScreen.styles.footer}>
          <Background style={authScreen.styles.backCard}
            gradient={authScreen.backCardGradient}
          />

          <Background style={authScreen.styles.frontCard}
            gradient={authScreen.frontCardGradient}
          >
            <View style={authScreen.styles.cardTextWrapper}>
              <Text style={authScreen.styles.cardTitle}>
                {(isRegisterScreen) ? cardTitle.registerMode : cardTitle.loginMode}
              </Text>
              <Text style={authScreen.styles.cardText}>
                {(isRegisterScreen) ? cardText.registerMode : cardText.loginMode}
              </Text>
            </View>
            <View style={authScreen.styles.authWrapper}>
              {isRegisterScreen &&
                <CustomTextInput
                  name='username'
                  label='Username'
                  control={control}
                  rules={{
                    required: 'Username is required',
                    minLength: { value: 8, message: 'Username must be at least 8 characters long' },
                    maxLength: { value: 24, message: 'Username must be at most 24 characters long' }
                  }}
                  style={authScreen.styles.textInput}
                />
              }
              <CustomTextInput
                name='e-mail'
                label='E-mail'
                control={control}
                rules={{
                  required: 'E-mail is required',
                  minLength: { value: 8, message: 'E-mail must be at least 8 characters long' },
                  pattern: { value: EMAIL_REGEX, message: 'Invalid E-mail' }
                }}
                keyboardType="email-address"
                style={authScreen.styles.textInput}
              />
              <CustomTextInput
                name='password'
                label='Password'
                control={control}
                rules={{
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Password must be at least 8 characters long' },
                  maxLength: { value: 64, message: 'Password must be at most 64 characters long' }
                }}
                secureTextEntry
                style={authScreen.styles.textInput}
              />
              {isRegisterScreen &&
                <CustomTextInput
                  name='confirm-password'
                  label='Confirm password'
                  control={control}
                  rules={{
                    required: 'Password is required',
                    minLength: { value: 8, message: 'Password must be at least 8 characters long' },
                    maxLength: { value: 64, message: 'Password must be at most 64 characters long' },
                    validate: (value: string) => value === watch('password') || 'The passwords do not match'
                  }}
                  secureTextEntry
                  style={authScreen.styles.textInput}
                />
              }
            </View>
            <View style={authScreen.styles.authButtonWrapper}>
              <CustomButton
                text={(isRegisterScreen) ? authButtonText.registerMode : authButtonText.loginMode}
                textStyle={authButton.styles.buttonText}
                onPress={handleSubmit(onSubmit)}
                gradient={(isRegisterScreen)
                  ? authButton.registerGradient
                  : authButton.loginGradient
                }
                disabled={loading}
                buttonStyle={authButton.styles.button}
              />
            </View>
            {/* </Form> */}
          </Background>
        </View>
      </View>
      </KeyboardAwareScrollView>
    </Background>
  )
}

// TODO: move this to another file?
const headerText = {
  registerMode: 'Already have an account?',
  loginMode: 'Do not have an account?'
}

const headerButtonText = {
  registerMode: 'Login',
  loginMode: 'Register'
}

const centerText = {
  registerMode: 'New to LoopIt?',
  loginMode: 'Is that you?'
}

const cardTitle = {
  registerMode: 'Get Started 🔥',
  loginMode: 'Welcome Back 😎'
}

const cardText = {
  registerMode: 'Begin your journey with us',
  loginMode: 'Enter your details below'
}

const authButtonText = {
  registerMode: 'Register',
  loginMode: 'Login'
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
