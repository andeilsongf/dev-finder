// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Main } from './pages/Main';
import { Profile } from './pages/Profile';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: { backgroundColor: '#7D40E7'},
          headerTintColor: '#FFF',
          headerBackTitleVisible: false
          }}
        >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'DevRadar',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Perfil no Github'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}