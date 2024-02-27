import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import WelcomeBackground from '@assets/new-welcome-background.svg'
import styles from '@styles/welcome-screen.style'
import * as authButton from '@styles/shared/auth-button.style'
import CustomButton from '@components/custom-button.component'
import { type StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types'

interface HomeStackParamList {
  ExploreScreen: undefined
  CreateRouteScreen: undefined
  SavedScreen: undefined
  MyProfileScreen: undefined
};

interface ExploreScreenProps {
  navigation: WelcomeScreenNavigationProp
}

export type WelcomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'ExploreScreen'>

export default function ExploreScreen ({ navigation }: ExploreScreenProps): JSX.Element {
  const goToRegister = (): void => {
    navigation.navigate('AuthScreen', { authMethod: 'register' })
  }

  const goToLogin = (): void => {
    navigation.navigate('AuthScreen', { authMethod: 'login' })
  }

  return (
    <View style={styles.screenWrapper}>
      <StatusBar style='light' />

      <View style={styles.backgroundWrapper}>
        <WelcomeBackground
          width="100%"
          height="100%"
          preserveAspectRatio="xMinYMin slice"
        ></WelcomeBackground>
      </View>

      <View style={styles.welcomeWrapper}>
        <Text style={styles.appNameText}>LoopIt</Text>
      </View>

      <View style={styles.authWrapper}>
        <CustomButton
          text='Login'
          onPress={goToLogin}
          gradient={authButton.loginGradient}
          textStyle={authButton.styles.buttonText}
          buttonStyle={authButton.styles.button}
        />
        <CustomButton
          text='Register'
          onPress={goToRegister}
          gradient={authButton.registerGradient}
          textStyle={authButton.styles.buttonText}
          buttonStyle={authButton.styles.button}
        />
      </View>

    </View>
  )
}
