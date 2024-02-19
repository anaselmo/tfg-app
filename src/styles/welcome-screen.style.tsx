/* eslint-disable object-shorthand */
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

const borderWidth = 0

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#354436',
    borderColor: 'red',
    borderWidth: borderWidth
  },
  backgroundWrapper: {
    top: Constants.statusBarHeight,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute'
  },
  headerWrapper: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: borderWidth
  },
  appNameText: {
    color: 'white',
    fontSize: 50,
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
    justifyContent: 'flex-end',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: borderWidth,
    paddingBottom: '10%'
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '85%',
    paddingVertical: 7,
    borderColor: 'red',
    borderStyle: 'dotted',
    borderWidth: borderWidth
  },
  button: {
    backgroundColor: 'transparent',
    padding: 5,
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
