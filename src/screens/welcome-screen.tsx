import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import WelcomeBackground from '../../assets/new-welcome-background.svg'
import styles from '../styles/welcome-screen.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import WelcomeHeader from '../components/welcome-header.component'
import { LinearGradient } from 'expo-linear-gradient'

export default function WelcomeScreen ({ navigation }: { navigation: any }): JSX.Element {
  const goToRegister = (): void => {
    navigation.navigate('RegisterScreen')
  }

  const goToLogin = (): void => {
    navigation.navigate('LoginScreen')
  }

  return (
    <View style={styles.screenWrapper}>
      {/* <StatusBar translucent /> */}

      <View style={styles.backgroundWrapper}>
        <WelcomeBackground
          width="100%"
          height="100%"
          preserveAspectRatio="xMinYMin slice"
        ></WelcomeBackground>
      </View>

      <WelcomeHeader/>

      <View style={styles.authWrapper}>
        <View style={styles.buttonContainer}>
          
            <LinearGradient
              colors={['#C7FFB4', '#B5FFC9']}
              style={styles.button}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            >
              <TouchableOpacity style={styles.button} onPress={goToLogin}>
              <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </LinearGradient>
          
        </View>
        <View style={styles.buttonContainer}>
          <LinearGradient
                colors={['#70FF3E', '#3AFF71']}
                style={styles.button}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
          >
            <TouchableOpacity style={styles.button} onPress={goToRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}
