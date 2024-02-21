import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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

export const registerGradient = {
  colors: ['#70FF3E', '#3AFF71'],
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.5 }
}

export const loginGradient = {
  colors: ['#C7FFB4', '#B5FFC9'],
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.5 }
}
