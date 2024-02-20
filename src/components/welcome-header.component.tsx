import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/welcome-screen.style'

/**
 * Renders the welcome header component.
 */
const WelcomeHeader: React.FC = () => {
  return (
    <View style={styles.welcomeWrapper}>
      {/* TODO: Hacer el SVG más ancho, más mapa :) */}
      <Text style={styles.appNameText}>LoopIt</Text>
    </View>
  )
}

export default WelcomeHeader
