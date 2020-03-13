import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { bottomNavigationRoutes } from './routes'

const Tab = createBottomTabNavigator()

export default function BottomNavigator(props) {
  return (
    <Tab.Navigator>
      {bottomNavigationRoutes.map((route, index) => (
        <Tab.Screen key={index} name={route.name} component={route.component} />
      ))}
    </Tab.Navigator>
  )
}
