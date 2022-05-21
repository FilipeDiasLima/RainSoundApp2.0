import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Pages/Home';
import RainTypes from '../Pages/RainTypes';
import { PlayerProvider } from '../context/PlayerContext';
import RainSettings from '../Pages/RainSettings';

const { Navigator, Screen } = createNativeStackNavigator()

export default function AppStack() {
  return (
    <NavigationContainer>
      <PlayerProvider>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name='Home' component={Home} />
          <Screen name='RainTypes' component={RainTypes} />
          <Screen name='RainSettings' component={RainSettings} />
        </Navigator>
      </PlayerProvider>
    </NavigationContainer>
  )
}