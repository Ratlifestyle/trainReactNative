import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import Bandeau from './components/Bandeau';
import MainPage from './components/MainPage';
import Cat from './components/Cat';



const Stack =  createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home'
        component={MainPage}
        options={{
          title: 'instagramTest',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: 'white',
        }}
        ></Stack.Screen>
        <Stack.Screen name='Cat' component={Cat} initialParams={{catName: "Rodolph"}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
