import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import Button from '../Button'
import { styles } from './styles'

export default function FriendItem({ userData, onUserClick }) {
  const { firstName, lastName, image } = userData
  const userName = `@${firstName}`
  const fullName = `${firstName} ${lastName}`

  return (
    <TouchableWithoutFeedback onPress={() => onUserClick(userData)}>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.name}>{fullName}</Text>
        </View>
        <Button text='Follow' style={{ marginLeft: 'auto' }} />
      </View>
    </TouchableWithoutFeedback>
  )
}
