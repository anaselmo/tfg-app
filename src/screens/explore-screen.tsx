/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import * as homeStackStyles from '@styles/home-stack-screen.style'
import { type StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types'
import Background from '@components/background.component'
import CustomMapView from '@/components/custom-map-view'
import CustomButton from '@/components/custom-button.component'
import * as authButton from '@/styles/shared/auth-button.style'
import * as authScreen from '../styles/auth-screen.style'
import { LatLng } from 'react-native-maps'
// import MapViewDirections from 'react-native-maps-directions'
// import { GOOGLE_API_KEY } from '@/lib/constants'
// import dotenv from 'dotenv'
// dotenv.config()

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
  const [roundTripParams, setRoundTripParams] = useState<{
    distance: number
    points?: number
    seed?: number
  }>()
  return (
    <Background gradient={homeStackStyles.backgroundGradient}>
      <StatusBar style="light" />
      <View
        style={{
          ...homeStackStyles.styles.screenWrapper
        }}
      >
        {/* <View style={authScreen.styles.authButtonWrapper}> */}
        <CustomButton
          buttonStyle={{
            height: 40,
            borderColor: 'black',
            width: '70%',
            margin: 10,
            alignSelf: 'center',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center' // Add this line
          }}
          gradient={authButton.loginGradient}
          textStyle={{
            ...authButton.styles.buttonText
          }}
          text="Create Route"
          onPress={() => {
            setRoundTripParams({ distance: 5000, seed: Math.random() * 5000 })
          }}
        ></CustomButton>
        {/* </View> */}
        <CustomMapView
          style={{
            width: '95%',
            borderRadius: 15,
            overflow: 'hidden',
            flex: 1,
            alignSelf: 'center'
          }}
          roundTripParams={roundTripParams}
        />
      </View>
    </Background>
  )
}
