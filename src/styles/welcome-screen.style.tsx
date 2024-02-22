import { StyleSheet } from 'react-native'

const borderWidth = 0

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: '#354436',
    // debug
    borderColor: 'red',
    borderWidth
  },
  backgroundWrapper: {
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
    borderWidth
  },
  appNameText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    // debug
    borderColor: 'yellow',
    borderStyle: 'dotted',
    borderWidth
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
    borderWidth
  }
})

export default styles
