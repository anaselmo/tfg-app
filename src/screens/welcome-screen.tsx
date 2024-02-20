import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import WelcomeBackground from '../../assets/new-welcome-background.svg'
import styles from '../styles/welcome-screen.style'
import CustomButton from '../components/custom-button.component'

export default function WelcomeScreen ({ navigation }: { navigation: any }): JSX.Element {
  const goToRegister = (): void => {
    navigation.navigate('RegisterScreen')
  }

  const goToLogin = (): void => {
    navigation.navigate('LoginScreen')
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
          textStyle={styles.buttonText}
          onPress={goToLogin}
          gradient={{
            colors: ['#C7FFB4', '#B5FFC9'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 }
          }}
          buttonStyle={styles.button}
        />
        <CustomButton
          text='Register'
          textStyle={styles.buttonText}
          onPress={goToRegister}
          gradient={{
            colors: ['#70FF3E', '#3AFF71'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 }
          }}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  )
}
