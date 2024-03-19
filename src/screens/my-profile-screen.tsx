import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import * as homeStackStyles from '@styles/home-stack-screen.style'
import { type StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types'
import Background from '@components/background.component'
import * as authScreen from '../styles/auth-screen.style'
import * as authButton from '../styles/shared/auth-button.style'
import CustomButton from '@/components/custom-button.component'
import { useAuthStore } from '@/lib/store'

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
  const { signOut } = useAuthStore()
  return (
    <Background
      gradient={homeStackStyles.backgroundGradient}
    >
      <StatusBar style='light' />
      <View style={homeStackStyles.styles.screenWrapper}>
        <Text style={homeStackStyles.styles.headerText}>My Profile</Text>
        <View style={{ ...authScreen.styles.authButtonWrapper, alignSelf: 'center', position: 'absolute', bottom: 0 }}>
          <CustomButton
            text="Log Out"
            textStyle={authButton.styles.buttonText}
            onPress={() => {
              signOut().catch((error) => {
                console.error('Error during sign out:', error)
              })
            }}
            gradient={authButton.registerGradient}
            buttonStyle={authButton.styles.button}
          />
        </View>
      </View>
    </Background>
  )
}
