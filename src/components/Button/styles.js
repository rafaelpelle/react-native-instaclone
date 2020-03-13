import { StyleSheet } from 'react-native'
import { blue } from '../../utils/colors'

export const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: blue,
    shadowColor: '#000',
    elevation: 3,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
})
