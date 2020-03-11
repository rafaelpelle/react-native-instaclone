import 'react-native-gesture-handler'
import React from 'react'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

export default function App() {
  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Notifications' component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('Notifications')}
      >
        <Text style={styles.buttonText}>Go to Notifications</Text>
      </TouchableHighlight>
    </View>
  )
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NotificationScreen</Text>
      <TouchableHighlight style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go back Home</Text>
      </TouchableHighlight>
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
  button: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    elevation: 3,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 200,
  },
  buttonText: {
    fontSize: 15,
    color: 'rgb(113, 89, 193)',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
})
