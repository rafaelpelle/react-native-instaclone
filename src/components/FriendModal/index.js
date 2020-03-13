import React from 'react'
import { View, Text, Image } from 'react-native'
import Modal from 'react-native-modal'
import { styles } from './styles'

export default function FriendModal({ selectedUser, onCloseModal }) {
  const { firstName, lastName, image, email, phone, city, address, gender } = selectedUser || {}
  const fullName = firstName ? `${firstName} ${lastName}` : ''

  return (
    <Modal
      isVisible={!!selectedUser}
      onBackButtonPress={onCloseModal}
      onBackdropPress={onCloseModal}
    >
      <View style={styles.modalContent}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.email}>{email || ''}</Text>
        <Text style={styles.phone}>{phone || ''}</Text>
        <Text style={styles.address}>
          <Text style={styles.city}>{city || ''}</Text>
          {`, ${address || ''}`}
        </Text>
      </View>
    </Modal>
  )
}
