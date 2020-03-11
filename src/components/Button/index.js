import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import { styles } from './styles'

export default function Button({ text, onPress, style, textStyle }) {
  return (
    <TouchableHighlight style={{ ...styles.button, ...style }} onPress={onPress}>
      <Text style={{ ...styles.buttonText, ...textStyle }}>{text}</Text>
    </TouchableHighlight>
  )
}
