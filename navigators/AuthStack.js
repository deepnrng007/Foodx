import React, {useEffect} from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignUpScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {
  //   useEffect(() => {
  //     // AsyncStorage.getItem('alreadyLaunched').then((value) => {
  //     //   if (value == null) {
  //     //     AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
  //     //     setIsFirstLaunch(true);
  //     //   } else {
  //     //     setIsFirstLaunch(false);
  //     //   }
  //     // }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

  //     console.log('google sign in initiated');
  //     GoogleSignin.configure({
  //       webClientId:
  //         '823704107970-39s8n1fiff10srg92cavm3kb39cmnqpd.apps.googleusercontent.com',
  //     });
  //   }, []);

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({navigation}) => ({
          title: '',
          headerShown: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
          },
        })}></Stack.Screen>
      <Stack.Screen
        name="SignUpScreen"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <View>
              <MaterialIcons.Button
                name="arrow-back-ios"
                size={25}
                backgroundColor="white"
                color="#333"
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
              />
            </View>
          ),
        })}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
