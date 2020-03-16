import { StyleSheet } from 'react-native'
import { darkGrey } from '../../utils/colors'

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
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    zIndex: 1500,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  name: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: 'bold',
    color: darkGrey,
  },
})
