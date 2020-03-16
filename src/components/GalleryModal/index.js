import React from 'react'
import { View, Image, Modal, Text } from 'react-native'

import PostHeader from '../Post/PostHeader'
import LazyImage from '../LazyImage'
import { styles } from './styles'

export default function GalleryModal({ selectedImage, onCloseModal }) {
  const { preview, image, author } = selectedImage || {}

  return (
    <Modal visible={!!selectedImage} onRequestClose={onCloseModal} animationType='fade' transparent>
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContent}>
          <PostHeader postData={{ author }} />
          <LazyImage
            style={styles.image}
            source={{ uri: image }}
            smallSource={{ uri: preview }}
            aspectRatio={1}
            shouldLoad={true}
          />
        </View>
      </View>
    </Modal>
  )
}
