import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../components/Button'
import { styles } from './styles'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
    </View>
  )
}
