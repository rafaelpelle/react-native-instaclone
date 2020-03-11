import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
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
    fontSize: 15,
    color: 'rgb(113, 89, 193)',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
})
