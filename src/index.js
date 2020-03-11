import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Notifications from './pages/Notifications'

export default function App() {
  const Stack = createStackNavigator()
  const screenOptions = {
    headerTitleAlign: 'center',
    cardOverlayEnabled: false,
    animationEnabled: false,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Home Page' }} />
        <Stack.Screen name='Notifications' component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
