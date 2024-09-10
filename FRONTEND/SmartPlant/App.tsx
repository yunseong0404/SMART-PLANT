/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Start from './src/screens/Start';
import Main from './src/screens/Main';
import CreateName from './src/screens/CreatePlant/CreateName';
import CreateKind from './src/screens/CreatePlant/CreateKind';
import CreateDate from './src/screens/CreatePlant/CreateDate';
import CreatePhoto from './src/screens/CreatePlant/CreatePhoto';
import { create } from 'react-test-renderer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function CreateTabScreen() {
  return(
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#E1F2EC'
          }
      }}
      initialRouteName="CreateName"
    >
        <Tab.Screen 
          name="CreateName" 
          component={CreateName}
          options={{tabBarLabel: 'Create Plant'}}

        />
        <Tab.Screen 
          name="CreateKind" 
          component={CreateKind}
        />
        <Tab.Screen 
          name="CreateDate" 
          component={CreateDate}
        />
        <Tab.Screen 
          name="CreatePhoto" 
          component={CreatePhoto}
        />
    </Tab.Navigator>
  )
}


function App() {
  
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={Start}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreateTabScreen"
            component={CreateTabScreen}
            options={{headerShown: false}} 
            // options={{ title: 'Create Plant' }}          
          />
          <Stack.Screen 
            name="Main" 
            component={Main}
            options={{headerShown: false}} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1F2EC", 
    width: '100%', 
    height: '100%',
  },
});

const sort = StyleSheet.create({
  midle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  }
});

export default App;