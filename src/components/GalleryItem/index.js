import React from 'react'
import { TouchableWithoutFeedback, Image } from 'react-native'
import { styles } from './styles'

export default function GalleryItem({ imageData, onImageClick, onCloseModal }) {
  return (
    <TouchableWithoutFeedback onLongPress={() => onImageClick(imageData)} onPressOut={onCloseModal}>
      <Image style={styles.image} source={{ uri: imageData.preview }} />
    </TouchableWithoutFeedback>
  )
}
