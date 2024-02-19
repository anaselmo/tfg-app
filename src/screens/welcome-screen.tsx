import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import WelcomeBackground from '../../assets/welcome2'
import styles from '../styles/welcome-screen.style'

export default function WelcomeScreen (): any {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf')
  })

  useEffect(() => {
    async function prepare (): Promise<void> {
      await SplashScreen.preventAutoHideAsync()
    }
    void prepare()
  }, [])

  console.log(`fontsLoaded: ${fontsLoaded}`)

  if (!fontsLoaded) {
    return undefined
  } else {
    void SplashScreen.hideAsync()
  }

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.welcomeTextWrapper}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appNameText}>🔥 APP NAME 😎</Text>
        <StatusBar translucent />
      </View>

      <View style={styles.mapWrapper}>
        {/* TODO: Hacer el SVG más ancho, más mapa :) */}
        <WelcomeBackground
            preserveAspectRatio="xMinYMin slice"
            style={styles.mapSvg}
        ></WelcomeBackground>
      </View>

      <View style={styles.authWrapper}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const handleRegister = (): void => {
  Alert.alert('Register', 'Register button!')
}

const handleLogin = (): void => {
  Alert.alert('Login', 'Login button!')
}
