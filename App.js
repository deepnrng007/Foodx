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

import {TabNavigator} from './navigators/TabNavigator';
import {MainStackScreen} from './navigators/StackNavigator';
import AuthStack from './navigators/AuthStack';
import {AuthProvider} from './Providers/AuthProvider';
import NavigationProvider from './Providers/NavigationProvider';

const MainStack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationProvider />
      {/* <NavigationContainer>
        
        <MainStack.Navigator
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
        <MainStack.Screen name="Tab" component={TabNavigator} />
        <MainStack.Screen name="Main" component={MainStackScreen} />
      </MainStack.Navigator>
      </NavigationContainer> */}
    </AuthProvider>
  );
};

export default App;
