/* eslint-disable object-shorthand */
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

const borderWidth = 0

const styles = StyleSheet.create({
  pageWrapper: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'stretch',
    backgroundColor: 'black'
  },
  welcomeTextWrapper: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: borderWidth
  },
  mapWrapper: {
    flex: 7,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: borderWidth
  },
  mapText: {
    color: 'white',
    borderColor: 'yellow',
    borderStyle: 'dotted',
    borderWidth: borderWidth
  },
  mapSvg: {
    width: '2%',
    height: '2%',
    borderColor: 'yellow',
    borderStyle: 'dotted',
    borderWidth: borderWidth
  },
  welcomeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    borderColor: 'yellow',
    borderStyle: 'dotted',
    borderWidth: borderWidth
  },
  appNameText: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    borderColor: 'yellow',
    borderStyle: 'dotted',
    borderWidth: borderWidth
  },
  authWrapper: {
    flex: 3,
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: borderWidth
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '85%',
    borderColor: 'red',
    borderStyle: 'dotted',
    borderWidth: borderWidth
  },
  loginButton: {
    backgroundColor: '#D9D9D9',
    padding: 8,
    borderRadius: 17
  },
  registerButton: {
    backgroundColor: '#4DAF57',
    padding: 7,
    borderRadius: 17
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Inter-Regular'
  }
})

export default styles
