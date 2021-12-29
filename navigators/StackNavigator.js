import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import {View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import CardListScreen from '../screens/CardListScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ItemDetails from '../screens/ItemDetails';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';

const MainStack = createStackNavigator();

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff', // iOS
          elevation: 0, // Android
        },
        headerTintColor: '#000',
      }}>
      <MainStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
      <MainStack.Screen
        name="CardListScreen"
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
        component={CardListScreen}
      />
      <MainStack.Screen
        name="ItemDetails"
        options={({route}) => ({
          headerBackTitleVisible: false,
          title: '',
        })}
        component={ItemDetails}
      />
      <MainStack.Screen
        name="CartScreen"
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
        component={CartScreen}
      />
    </MainStack.Navigator>
  );
};

export const ProfileStackScreen = ({navigation}) => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff', // iOS
          elevation: 0, // Android
        },
        headerTintColor: '#000',
      }}>
      <MainStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#fff"
                color="#000"
                onPress={() => {}}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor="#fff"
                color="#000"
                onPress={() => navigation.push('Main', {screen: 'EditProfile'})}
              />
            </View>
          ),
        }}
      />
    </MainStack.Navigator>
  );
};

export const HomeStackScreen = ({navigation}) => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff', // iOS
          elevation: 0, // Android
        },
        headerTintColor: '#000',
      }}>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#fff"
                color="#000"
                onPress={() => {}}
              />
            </View>
          ),
          headerRight: () => (
            <View>
              <MaterialCommunityIcons.Button
                name="cart"
                size={25}
                backgroundColor="#fff"
                color="#000"
                onPress={() =>
                  navigation.push('Main', {
                    screen: 'CartScreen',
                    params: {
                      title: 'Cart',
                    },
                  })
                }
              />
            </View>
          ),
        }}
      />
    </MainStack.Navigator>
  );
};
