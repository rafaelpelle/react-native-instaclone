import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'
import LazyImage from '../LazyImage'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

export default function Post({ postData, shouldLoad }) {
  const { image, aspectRatio, small } = postData
  return (
    <View style={styles.post}>
      <PostHeader postData={postData} />
      <LazyImage
        aspectRatio={aspectRatio}
        source={{ uri: image }}
        smallSource={{ uri: small }}
        shouldLoad={shouldLoad}
      />
      <PostFooter postData={postData} />
    </View>
  )
}
