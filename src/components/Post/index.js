import React from 'react'
import { View, Text, Image } from 'react-native'

import LazyImage from '../LazyImage'
import { styles } from './styles'

export default function Post({ postData, shouldLoad }) {
  const { author, image, description, aspectRatio, small } = postData
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: author.avatar }} />
        <Text style={styles.name}>{author.name}</Text>
      </View>
      <LazyImage
        aspectRatio={aspectRatio}
        source={{ uri: image }}
        smallSource={{ uri: small }}
        shouldLoad={shouldLoad}
      />
      <Text style={styles.description}>
        <Text style={{ fontWeight: 'bold' }}>{author.name}</Text>
        <Text>{description}</Text>
      </Text>
    </View>
  )
}
