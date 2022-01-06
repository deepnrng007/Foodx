/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {TabNavigator} from './TabNavigator';
import {MainStackScreen} from './StackNavigator';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff', // iOS
          elevation: 0, // Android
        },
        headerTintColor: '#000',
      }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Main" component={MainStackScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
