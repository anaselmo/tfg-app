/* eslint-disable object-shorthand */
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export const borderWidth = 0

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    // debug
    borderColor: 'red',
    borderWidth: borderWidth
  },
  header: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    // debug
    borderColor: 'yellow',
    borderWidth: borderWidth
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: 10,
    // debug
    borderColor: 'yellow',
    borderWidth: borderWidth
  },
  headerRight: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
    // debug
    borderColor: 'yellow',
    borderWidth: borderWidth
  },
  // TODO: Eventually this will be an icon
  headerGoBackText: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 30,
    // debug
    borderColor: 'green',
    borderWidth: borderWidth,
    borderStyle: 'dotted'
  },
  headerAuthText: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    padding: 10,
    // debug
    borderColor: 'green',
    borderWidth,
    borderStyle: 'dotted'
  },
  headerButtonText: {
    color: 'white',
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    // debug
    borderColor: 'green',
    borderWidth: borderWidth,
    borderStyle: 'dotted'
  },
  backButton: {
    // debug
    borderColor: 'green',
    borderWidth: borderWidth
  },
  goToButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  center: {
    flex: 3,
    alignItems: 'flex-start',
    // debug
    borderColor: 'yellow',
    borderWidth: borderWidth
  },
  centerText: {
    marginTop: 30,
    marginLeft: 30,
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    fontFamily: 'Inter-Bold',
    // debug
    borderColor: 'yellow',
    borderStyle: 'dotted',
    borderWidth: borderWidth
  },
  footer: {
    flex: 5,
    alignItems: 'stretch',
    // debug
    borderColor: 'yellow',
    borderWidth: borderWidth
  },
  backCard: {
    alignSelf: 'center',
    width: '90%',
    height: '20%',
    position: 'absolute',
    backgroundColor: '#202020',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // debug
    borderColor: 'lightblue',
    borderWidth: borderWidth
  },
  frontCard: {
    flex: 29,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: -10,
    // debug
    borderColor: 'darkblue',
    borderWidth: borderWidth
  },
  cardTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: borderWidth,
    borderColor: 'red'
  },
  authWrapper: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: borderWidth,
    borderColor: 'red'
  },
  registerButtonWrapper: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    // debug
    borderWidth: borderWidth,
    borderColor: 'red'
  },
  cardTitle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    // debug
    borderColor: 'yellow',
    borderStyle: 'dotted',
    borderWidth: borderWidth
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    // debug
    borderColor: 'yellow',
    borderStyle: 'dotted',
    borderWidth: borderWidth
  },
  registerButtonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    backgroundColor: 'transparent'
  },
  registerButton: {
    alignSelf: 'center',
    width: '80%',
    paddingVertical: 9,
    marginVertical: 7,
    borderRadius: 15,
    borderColor: 'yellow',
    borderWidth: borderWidth
  },
  textInput: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: '#696969',
    marginTop: 10,
    marginBottom: 15
  }
})

export const backgroundGradient = {
  colors: ['#0F0F0F', '#202020'],
  start: { x: 0, y: 0.6 },
  end: { x: 1, y: 0.1 }
}

export const frontCardGradient = {
  colors: ['#3a3a3a', '#10120f'],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 }
}

export const backCardGradient = {
  colors: ['#202020', '#202020']
}
