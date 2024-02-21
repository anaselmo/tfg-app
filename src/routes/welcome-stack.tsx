import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import WelcomeScreen from '../screens/welcome-screen'
import AuthScreen from '../screens/auth-screen'
const screens = {
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false // Hide screen stack navigation header
    }
  },
  AuthScreen: {
    screen: AuthScreen,
    navigationOptions: {
      headerShown: false // Hide screen stack navigation header
    }
  }
}
// WelcomeStack con animaciones entre pantallas del stack:
// https://reactnavigation.org/docs/stack-navigator/#transitionpresets

const WelcomeStack = createStackNavigator(screens)

export default createAppContainer(WelcomeStack)
