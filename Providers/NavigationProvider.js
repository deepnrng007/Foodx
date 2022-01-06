import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from '../navigators/AuthStack';
import MainStack from '../navigators/MainStack';
import {useContext, useState, useEffect} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import auth from '@react-native-firebase/auth';

const NavigationProvider = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    console.log('user changed');
    console.log(user);
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default NavigationProvider;
