import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import * as homeStackStyles from '@styles/home-stack-screen.style'
import { type StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types'
import Background from '@components/background.component'

interface HomeStackParamList {
  ExploreScreen: undefined
  CreateRouteScreen: undefined
  SavedScreen: undefined
  MyProfileScreen: undefined
}

interface ExploreScreenProps {
  navigation: WelcomeScreenNavigationProp
}

export type WelcomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ExploreScreen'
>

export default function ExploreScreen({ navigation }: ExploreScreenProps): JSX.Element {
  return (
    <Background gradient={homeStackStyles.backgroundGradient}>
      <StatusBar style="light" />
      <View style={homeStackStyles.styles.screenWrapper}>
        <Text style={homeStackStyles.styles.headerText}>Create Route</Text>
      </View>
    </Background>
  )
}
