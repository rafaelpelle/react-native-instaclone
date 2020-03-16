import { StyleSheet } from 'react-native'
import { darkGrey } from '../../utils/colors'

export const styles = StyleSheet.create({
  post: {
    marginTop: 10,
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
  image: {
    width: '100%',
  },
  description: {
    padding: 15,
    lineHeight: 18,
  },
})
