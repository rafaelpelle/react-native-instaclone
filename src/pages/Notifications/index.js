import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../components/Button'
import { styles } from './styles'

export default function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NotificationScreen</Text>
      <Button text={'Go back Home'} onPress={() => navigation.goBack()} />
    </View>
  )
}
