/* eslint-disable object-shorthand */
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export const borderWidth = 1

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    // debug
    borderColor: 'red',
    borderWidth: borderWidth
  },
  header: {
    flex: 1,
    width: '90%',
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
    justifyContent: 'flex-start',
    // paddingLeft: 10,
    // debug
    borderColor: 'yellow',
    borderWidth: borderWidth
  },
  headerRight: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // debug
    borderColor: 'yellow',
    borderWidth: borderWidth
  },
  headerText: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 30,
    // debug
    borderColor: 'green',
    borderWidth: borderWidth,
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
    paddingVertical: 10,
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
  bottom: {
    flex: 5,
    alignItems: 'center',
    // debug
    borderColor: 'yellow',
    borderWidth: borderWidth
  },
  backCard: {
    flex: 1,
    width: '80%',
    backgroundColor: '#202020',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    // debug
    borderColor: 'lightblue',
    borderWidth: borderWidth
  },
  frontCard: {
    flex: 24,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    // debug
    borderColor: 'darkblue',
    borderWidth: borderWidth
  }
})

export default styles
