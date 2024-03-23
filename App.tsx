import React, { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import WelcomeNavigator from './src/routes/welcome-stack'
import HomeNavigator from './src/routes/home-stack'
import { useFonts } from 'expo-font'
import { useAuthStore } from '@lib/store'

export default function App(): JSX.Element | undefined {
  const { token } = useAuthStore()
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf')
  })
  useEffect(() => {
    async function prepare(): Promise<void> {
      await SplashScreen.preventAutoHideAsync()
    }
    void prepare()
  }, [])
  if (!fontsLoaded) {
    return undefined
  } else {
    void SplashScreen.hideAsync()
  }

  const userIsLoggedIn = token != null
  console.log('token:', token)

  return userIsLoggedIn ? <HomeNavigator /> : <WelcomeNavigator />
}
