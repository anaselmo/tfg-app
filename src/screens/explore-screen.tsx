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
import { useForm } from 'react-hook-form'
import CustomTextInput from '@/components/custom-input.component'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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

interface FormData {
  distance: number
  points?: number
  seed?: number
}

export default function ExploreScreen({ navigation }: ExploreScreenProps): JSX.Element {
  const [roundTripParams, setRoundTripParams] = useState<{
    distance: number
    points?: number
    seed?: number
  }>()

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch
  } = useForm<FormData>()
  return (
    <Background gradient={homeStackStyles.backgroundGradient}>
      <StatusBar style="light" />
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            ...homeStackStyles.styles.screenWrapper
          }}
        >
          <View
            style={{
              width: '80%',
              alignSelf: 'center'
            }}
          >
            <CustomTextInput
              name="distance"
              label="Distance (m)"
              control={control}
              keyboardType="numeric"
              errorColor="orange"
              rules={{
                required: 'Distance is required',
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/, // Expresión regular que valida si es un número
                  message: 'Distance must be a number with max 2 decimals'
                },
                maxLength: {
                  value: 6,
                  message: 'Distance must be at most 10 characters long'
                }
              }}
              style={{
                ...authScreen.styles.textInput
              }}
            />
            <CustomTextInput
              name="points"
              label="Points"
              control={control}
              keyboardType="numeric"
              errorColor="orange"
              rules={{
                required: 'Points are required',
                pattern: {
                  value: /^\d+$/, // Expresión regular que valida si es un número
                  message: 'Points must be an integer'
                },
                maxLength: {
                  value: 6,
                  message: 'Points must be at most 10 characters long'
                }
              }}
              style={{
                ...authScreen.styles.textInput
              }}
            />
          </View>
          <CustomButton
            buttonStyle={{
              height: 40,
              borderColor: 'black',
              width: '80%',
              margin: 10,
              alignSelf: 'center',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            gradient={authButton.loginGradient}
            textStyle={{
              ...authButton.styles.buttonText
            }}
            text="Create Route"
            onPress={handleSubmit(async data => {
              setRoundTripParams({ ...data, seed: Math.floor(Math.random() * 1000) })
            })}
          ></CustomButton>
          <CustomMapView
            style={{
              width: '100%',
              borderTopEndRadius: 15,
              borderTopStartRadius: 15,
              overflow: 'hidden',
              flex: 1,
              alignSelf: 'center'
            }}
            roundTripParams={roundTripParams}
          />
        </View>
      </KeyboardAwareScrollView>
    </Background>
  )
}
