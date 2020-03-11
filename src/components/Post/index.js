import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

export default function Post({ postData }) {
  const { author, image, description, aspectRatio } = postData
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: author.avatar }} />
        <Text style={styles.name}>{author.name}</Text>
      </View>
      <Image style={{ aspectRatio, ...styles.image }} source={{ uri: image }} />
      <Text style={styles.description}>
        <Text style={{ fontWeight: 'bold' }}>{author.name}</Text>
        <Text>{description}</Text>
      </Text>
    </View>
  )
}
