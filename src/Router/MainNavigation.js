import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { lightGrey } from '../utils/colors'
import BottomNavigation from './BottomNavigation'
import HeaderImage from '../components/HeaderImage'

const Stack = createStackNavigator()

const screenOptions = {
  // cardOverlayEnabled: false,
  // animationEnabled: false,
  headerTitleAlign: 'center',
  headerTitle: (props) => <HeaderImage {...props} />,
  headerStyle: {
    backgroundColor: lightGrey,
  },
}

export default function MainNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen name='Home' component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
