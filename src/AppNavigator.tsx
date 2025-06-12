import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './view/SplashScreen';
import HomeScreen from './view/HomeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
      <Stack.Navigator initialRouteName="Splash" >
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Busca CEP', headerTitleAlign: 'center' }}/>
      </Stack.Navigator>
  );
}

 