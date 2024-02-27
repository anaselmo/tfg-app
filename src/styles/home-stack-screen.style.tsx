/* eslint-disable object-shorthand */
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export const borderWidth = 0

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    borderColor: 'red',
    borderWidth: borderWidth
  },
  header: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    // debug
    borderColor: 'yellow',
    borderWidth: borderWidth
  },
  headerText: {
    color: '#F0F0F0',
    fontFamily: 'Inter-Bold',
    fontSize: 37,
    padding: 30,
    // debug
    borderColor: 'green',
    borderWidth: borderWidth,
    borderStyle: 'dotted'
  },
  backButton: {
    // debug
    borderColor: 'green',
    borderWidth: borderWidth
  }
})

export const backgroundGradient = {
  colors: ['#92CB65', '#0E2100'],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 }
}
