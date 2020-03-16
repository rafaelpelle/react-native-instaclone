import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Text, Image, Modal, TouchableWithoutFeedback } from 'react-native'
import { styles } from './styles'

export default function FriendModal({ selectedUser, onCloseModal }) {
  const { firstName, lastName, image, email, phone, city, address } = selectedUser || {}
  const fullName = firstName ? `${firstName} ${lastName}` : ''

  const handleCloseModal = (event) => {
    event.stopPropagation()
    onCloseModal()
  }

  return (
    <Modal visible={!!selectedUser} onRequestClose={onCloseModal} animationType='fade' transparent>
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContent}>
          <TouchableWithoutFeedback onPress={handleCloseModal}>
            <Icon style={styles.closeButton} name='close' size={30} color='black' />
          </TouchableWithoutFeedback>
          <Image style={styles.image} source={{ uri: image }} />
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.email}>{email || ''}</Text>
          <Text style={styles.phone}>{phone || ''}</Text>
          <Text style={styles.address}>
            <Text style={styles.city}>{city || ''}</Text>
            {`, ${address || ''}`}
          </Text>
        </View>
      </View>
    </Modal>
  )
}
