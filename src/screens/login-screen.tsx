import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import welcomeStyles from '../styles/welcome-screen.style'
import CustomButton from '../components/custom-button.component'
import loginStyle, { borderWidth } from '../styles/login-screen.style'
import { LinearGradient } from 'expo-linear-gradient'
import Background from '../components/background.component'

export default function WelcomeScreen ({ navigation }: { navigation: any }): JSX.Element {
  const goToRegister = (): void => {
    navigation.navigate('RegisterScreen')
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
      <View style={loginStyle.screenWrapper}>
        <View style={loginStyle.header}>
          <View style={loginStyle.headerLeft}>
            <CustomButton
              text='&lt;'
              onPress={goBack}
              buttonStyle={loginStyle.backButton}
              textStyle={loginStyle.headerText}
            />
          </View>
          <View style={loginStyle.headerRight}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Inter-Regular',
                  fontSize: 12,
                  // debug
                  borderColor: 'green',
                  borderWidth: borderWidth,
                  borderStyle: 'dotted'
                }}
              >Don`t have an account?</Text>
              <CustomButton
                text='Register'
                onPress={goToRegister}
                buttonStyle={loginStyle.goToButton}
                textStyle={loginStyle.headerButtonText}
              />
          </View>
        </View>

        <View style={loginStyle.center}>
          <Text style={loginStyle.centerText}>We missed you! {'\n'}🤔 Guille... 🥺</Text>
        </View>

        <View style={loginStyle.bottom}>
          {/* <View style={loginStyle.backCard}> */}
            <Background
              gradient={{
                colors: ['#202020', '#202020']
              }}
              style={ loginStyle.backCard }

            />
          {/* </View> */}

            <View style={loginStyle.frontCard}>
              <Background style={loginStyle.frontCard}
                gradient={{
                  colors: ['#3a3a3a', '#10120f'],
                  start: { x: 0.5, y: 0 },
                  end: { x: 0.5, y: 1 }
                }}
              />
            </View>
        </View>
      </View>

    </Background>
  )
}
