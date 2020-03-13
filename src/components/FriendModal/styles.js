import { StyleSheet } from 'react-native'
import { blue } from '../../utils/colors'

export const styles = StyleSheet.create({
  modalContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '90%',
    height: '50%',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  city: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  email: {
    color: blue,
    marginVertical: 10,
    fontSize: 18,
  },
  phone: {
    marginVertical: 10,
    fontSize: 18,
  },
  address: {
    fontSize: 15,
  },
})
