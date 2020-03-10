import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Initial Commit</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgb(113, 89, 193)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
})
