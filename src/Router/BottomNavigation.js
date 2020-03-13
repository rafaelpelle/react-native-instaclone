import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { disabledGrey, black } from '../utils/colors'
import { bottomNavigationRoutes } from './routes'

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size, focused }) => {
    const foundRoute = bottomNavigationRoutes.find((r) => r.name === route.name)
    return <Icon name={foundRoute.icon} size={30} color={color} />
  },
})

const tabBarOptions = {
  activeTintColor: black,
  inactiveTintColor: disabledGrey,
  style: {
    paddingTop: 5,
    paddingBottom: 10,
    height: 65,
  },
}

const Tab = createBottomTabNavigator()

export default function BottomNavigator(props) {
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      {bottomNavigationRoutes.map((route, index) => (
        <Tab.Screen key={index} name={route.name} component={route.component} />
      ))}
    </Tab.Navigator>
  )
}
