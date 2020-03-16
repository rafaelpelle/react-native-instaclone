import { StyleSheet } from 'react-native'
import { blue, darkGrey } from '../../utils/colors'

export const styles = StyleSheet.create({
  modalBackdrop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1400,
    backgroundColor: '#000000BB',
    width: '100%',
    height: '100%',
  },
  modalContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '85%',
    height: '50%',
    borderRadius: 10,
    zIndex: 1500,
  },
  closeButton: {
    color: darkGrey,
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    color: darkGrey,
    fontSize: 30,
    fontWeight: 'bold',
  },
  city: {
    color: darkGrey,
    fontWeight: 'bold',
    fontSize: 15,
  },
  email: {
    color: blue,
    marginVertical: 10,
    fontSize: 18,
  },
  phone: {
    color: darkGrey,
    marginVertical: 10,
    fontSize: 18,
  },
  address: {
    color: darkGrey,
    fontSize: 15,
  },
})
