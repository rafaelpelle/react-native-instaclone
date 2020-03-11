import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Feed from './pages/Feed'
import HeaderImage from './components/HeaderImage'

export default function App() {
  const Stack = createStackNavigator()
  const screenOptions = {
    headerTitleAlign: 'center',
    cardOverlayEnabled: false,
    animationEnabled: false,
    headerTitle: (props) => <HeaderImage {...props} />,
    headerStyle: {
      backgroundColor: '#f5f5f5',
    },
  }

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#f5f5f5' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Stack.Screen name='Feed' component={Feed} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
