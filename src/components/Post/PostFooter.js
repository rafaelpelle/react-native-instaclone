import React from 'react'
import { Text } from 'react-native'
import { styles } from './styles'

export default function PostFooter({ postData }) {
  return (
    <Text style={styles.description}>
      <Text style={{ fontWeight: 'bold' }}>{postData.author.name}</Text>
      <Text>{postData.description}</Text>
    </Text>
  )
}
