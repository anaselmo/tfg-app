import WelcomeScreen from './src/screens/welcome-screen'

export default function App (): any {
  const userIsAlreadyLogged = false
  return userIsAlreadyLogged ? null : WelcomeScreen()
}
