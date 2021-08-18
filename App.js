import { StatusBar } from 'expo-status-bar';
import React from 'react';
import User from './components/Users';
import About from './components/About';
import { Button,View } from 'react-native';
import Profile from './components/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
      <Stack.Screen name="Users" component={User}/>
        <Stack.Screen
          name="about"
          component={About}
          options={{ title: 'About' }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{ title: 'Pofile' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


