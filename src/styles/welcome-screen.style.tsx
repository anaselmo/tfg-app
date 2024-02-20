/* eslint-disable object-shorthand */
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

const borderWidth = 0

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#354436',
    // debug
    borderColor: 'red',
    borderWidth: borderWidth
  },
  backgroundWrapper: {
    // top: Constants.statusBarHeight,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute'
  },
  welcomeWrapper: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // debug
    borderColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: borderWidth
  },
  appNameText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    // debug
    borderColor: 'yellow',
    borderStyle: 'dotted',
    borderWidth: borderWidth
  },
  authWrapper: {
    flex: 3,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    paddingBottom: 15,
    // debug
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: borderWidth
  },
  button: {
    paddingVertical: 9,
    marginVertical: 7,
    borderRadius: 15
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    backgroundColor: 'transparent'
  }
})

export default styles
