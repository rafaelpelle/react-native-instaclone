import React from 'react'
import { TouchableWithoutFeedback, Image } from 'react-native'
import { styles } from './styles'

export default function GalleryItem({ imageData, onImageClick }) {
  return (
    <TouchableWithoutFeedback onPress={onImageClick}>
      <Image style={styles.image} source={{ uri: imageData.preview }} />
    </TouchableWithoutFeedback>
  )
}
