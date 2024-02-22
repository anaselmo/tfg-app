import React, { useState } from 'react'
import { Alert, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import CustomButton from '../components/custom-button.component'
import Background from '../components/background.component'
import { TextInput } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { type WelcomeScreenNavigationProp } from './welcome-screen'
import * as authScreen from '../styles/auth-screen.style'
import * as authButton from '../styles/shared/auth-button.style'

interface AuthScreenProps {
  navigation: WelcomeScreenNavigationProp
}

export default function AuthScreen ({ navigation }: AuthScreenProps): JSX.Element {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)
  // TODO: try to find out why getParam is failing yet working 🤔
  const [isRegisterScreen, setAuthMethod] = useState<boolean>(navigation.getParam('authMethod') === 'register')

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

  // TODO: functionality for login/register
  const handleAuth = (): void => {
    Alert.alert(isRegisterScreen
      ? 'Register pressed'
      : 'Login pressed')
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
              {isRegisterScreen
                ? <TextInput
                    style={authScreen.styles.textInput}
                    theme={{ roundness: 15, colors: { primary: 'transparent' } }}
                    label='User name'
                    keyboardType="email-address"
                    activeUnderlineColor='#356310'
                    mode="flat"
                    maxLength={320}
                    underlineColor="transparent"
                  />
                : null
              }
              <TextInput
                style={authScreen.styles.textInput}
                theme={{ roundness: 15, colors: { primary: 'transparent' } }}
                label='E-mail'
                keyboardType="email-address"
                activeUnderlineColor='#356310'
                mode="flat"
                maxLength={320}
                underlineColor="transparent"
              />
              <TextInput
                style={authScreen.styles.textInput}
                theme={{ roundness: 15, colors: { primary: 'transparent' } }}
                label='Password'
                mode="flat"
                secureTextEntry={secureTextEntry}
                activeUnderlineColor='#356310'
                underlineColor="transparent"
                right={<TextInput.Icon icon={secureTextEntry ? 'eye' : 'eye-off'} onPress={togglePasswordVisibility} />}
                maxLength={64}
              />
              {isRegisterScreen
                ? <TextInput
                    style={authScreen.styles.textInput}
                    theme={{ roundness: 15, colors: { primary: 'transparent' } }}
                    label='Repeat Password'
                    mode="flat"
                    secureTextEntry={secureTextEntry}
                    activeUnderlineColor='#356310'
                    underlineColor="transparent"
                    right={<TextInput.Icon icon={secureTextEntry ? 'eye' : 'eye-off'} onPress={togglePasswordVisibility} />}
                    maxLength={64}
                  />
                : null
              }
            </View>
            <View style={authScreen.styles.authButtonWrapper}>
            <CustomButton
              text={(isRegisterScreen) ? authButtonText.registerMode : authButtonText.loginMode}
              textStyle={authButton.styles.buttonText}
              onPress={handleAuth}
              gradient={(isRegisterScreen) ? authButton.registerGradient : authButton.loginGradient}
              buttonStyle={authButton.styles.button}
            />
            </View>
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
