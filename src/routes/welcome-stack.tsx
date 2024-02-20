import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import WelcomeScreen from '../screens/welcome-screen'
import LoginScreen from '../screens/login-screen'
import RegisterScreen from '../screens/register-screen'
const screens = {
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false // Hide screen stack navigation header
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false // Hide screen stack navigation header
    }
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false // Hide screen stack navigation header
    }
  }
}
// WelcomeStack con animaciones entre pantallas del stack:
// https://reactnavigation.org/docs/stack-navigator/#transitionpresets

const WelcomeStack = createStackNavigator(screens)

export default createAppContainer(WelcomeStack)
