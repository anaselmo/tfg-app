import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from '../styles/welcome-screen.style'

export default function LoginScreen ({ navigation }: { navigation: any }): any {
  return (
    <SafeAreaView style={styles.screenWrapper}>
      <View style={styles.welcomeWrapper}>
      <Text style={styles.appNameText}>🔥 REGISTER SCREEN 😎</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
