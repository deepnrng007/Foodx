import React, {useContext, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import {TouchableOpacity, View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import CardListScreen from '../screens/CardListScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ItemDetails from '../screens/ItemDetails';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import withBadge from '../components/withBadge';
import AsyncStorage from '@react-native-community/async-storage';
import {primary} from '../utils/Colors';
import {AuthContext} from '../Providers/AuthProvider';

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
        name="ItemDetails"
        options={({route}) => ({
          headerBackTitleVisible: false,
          title: '',
        })}
        component={ItemDetails}
      />
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

const getItemInCart = async () => {
  var items = await AsyncStorage.getItem('items');
  console.log(items);
  if (items != null) {
    var obj = JSON.parse(items);
    var arr = Object.values(obj);
    return arr.length;
  }
  return 0;
};
export const HomeStackScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);

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
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 10,

                  alignItems: 'center',
                }}>
                <Icon name="ios-location-outline" size={25} color={primary} />
                <Text
                  style={{
                    fontSize: 18,
                    color: primary,
                    fontWeight: '900',
                    paddingHorizontal: 4,
                  }}>
                  Gurgaon, Haryana
                </Text>
                <Icon name="ios-chevron-down" size={25} color={primary} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <Icon
                name="exit-outline"
                size={25}
                color={primary}
                style={{paddingRight: 10}}></Icon>
            </TouchableOpacity>
          ),
        }}
      />
    </MainStack.Navigator>
  );
};
