import React from 'react'
import { SafeAreaView, Text } from 'react-native'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from '../styles/welcome-screen.style'

export default function LoginScreen ({ navigation }: { navigation: any }): any {
  return (
    <SafeAreaView style={styles.screenWrapper}>
      <Text style={styles.appNameText}>🔥 LOGIN SCREEN 😎</Text>
    </SafeAreaView>
  )
}
