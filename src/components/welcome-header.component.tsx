import React from 'react'
import { SafeAreaView, Text, ImageBackground, View } from 'react-native'
import styles from '../styles/welcome-screen.style'

import WelcomeBackground from '../../assets/new-welcome-background.svg'

/**
 * Renders the welcome header component.
 */
const WelcomeHeader: React.FC = () => {
  return (
    <View style={styles.headerWrapper}>
      {/* TODO: Hacer el SVG más ancho, más mapa :) */}
      <Text style={styles.appNameText}>LoopIt</Text>
    </View>
  )
}

export default WelcomeHeader
