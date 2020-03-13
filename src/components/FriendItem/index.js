import React from 'react'
import { View, Text, Image } from 'react-native'

import Button from '../Button'
import { styles } from './styles'
import { randomIntFromInterval } from '../../utils/number'

export default function FriendItem({ userData }) {
  const { firstName, lastName, image, phone, email } = userData
  const userName = `@${firstName}${randomIntFromInterval(1000, 9999)}`
  const fullName = `${firstName} ${lastName}`

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.name}>{fullName}</Text>
      </View>
      <Button text='Follow' style={{ marginLeft: 'auto' }} />
    </View>
  )
}
