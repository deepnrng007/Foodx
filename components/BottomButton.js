import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Swiper from 'react-native-swiper';
import IonIcons from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import StarRating from '../components/StarRating';
import CategoryBtn from '../components/CategoryButton';
import {FlatList} from 'react-native-gesture-handler';
import {data} from '../models/data';
import Card from '../components/Card';
import {black, primary, white} from '../utils/Colors';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {screenHeight} from '../utils/Dimensions';

export const BottomButton = ({navigation, onClear}) => {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: screenHeight * 0.07,
        bottom: 0,
        backgroundColor: '#ffccbc',
        opacity: 0.93,
        justifyContent: 'center',
      }}>
      <View
        flexDirection="row"
        style={{justifyContent: 'space-between', padding: 5}}>
        <Text style={{flex: 1, color: black, fontWeight: '700', fontSize: 16}}>
          You have items saved in your cart
        </Text>

        <View flexDirection="row">
          <TouchableOpacity
            style={{
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.push('Main', {
                screen: 'CartScreen',
                params: {
                  title: 'Cart',
                },
              });
            }}>
            <Text
              style={{
                color: primary,
                fontWeight: '700',
                fontSize: 16,
                paddingRight: 10,
              }}>
              View
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              justifyContent: 'center',
            }}
            onPress={() => {
              Alert.alert(
                '',
                'Do you want to clear your cart?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: async () => {
                      await AsyncStorage.clear();
                    },
                  },
                ],
                {cancelable: false},
              );
            }}>
            <IonIcons
              name="cross"
              size={20}
              color={'grey'}
              style={{
                borderRadius: 25,
                backgroundColor: white,
              }}></IonIcons>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};
