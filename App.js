import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'

const NormalStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle:{
      backgroundColor: 'blueviolet',
    },
    headerTintColor: 'white',
    contentStyle:{
      backgroundColor: 'blueviolet',
    }
    
    }} >
      <Stack.Screen name="Login" component={LoginScreen} options={
        {
          title: 'Login Page',
          headerTitleAlign: 'center',
        }
      } />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <NormalStack />
    </NavigationContainer>
  )
}

export default App