import React, { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import WelcomeNavigator from './src/routes/welcome-stack'
import HomeNavigator from './src/routes/home-stack'
import { useFonts } from 'expo-font'

export default function App (): JSX.Element | undefined {
  useEffect(() => {
    async function prepare (): Promise<void> {
      await SplashScreen.preventAutoHideAsync()
    }
    void prepare()
  }, [])
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf')
  })
  if (!fontsLoaded) {
    return undefined
  } else {
    void SplashScreen.hideAsync()
  }

  const userIsLoggedIn: boolean = true

  return (
    userIsLoggedIn
      ? <HomeNavigator />
      : <WelcomeNavigator />
  )
}
