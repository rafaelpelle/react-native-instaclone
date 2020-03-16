import React from 'react'
import { View, Text, Image } from 'react-native'

import { styles } from './styles'

export default function PostHeader({ postData }) {
  return (
    <View style={styles.header}>
      <Image style={styles.avatar} source={{ uri: postData.author.avatar }} />
      <Text style={styles.name}>{postData.author.name}</Text>
    </View>
  )
}
