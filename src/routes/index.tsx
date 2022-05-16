import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Pages/Home';

const { Navigator, Screen } = createNativeStackNavigator()

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Home' component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}