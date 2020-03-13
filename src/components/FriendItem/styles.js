import { StyleSheet } from 'react-native'
import { disabledGrey } from '../../utils/colors'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  name: {
    color: disabledGrey,
  },
  image: {
    borderRadius: 50,
    width: 70,
    height: 70,
    marginRight: 10,
  },
})
