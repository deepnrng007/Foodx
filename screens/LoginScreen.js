import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../Providers/AuthProvider';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import {showAlert} from '../utils/Utils';
import {blue, primary, white} from '../utils/Colors';
import {ScrollViewBase} from 'react-native';
import {PhoneSignIn} from '../components/PhoneAuth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {login, googleLogin, fbLogin, resetPassword} = useContext(AuthContext);

  const checkValidFields = async () => {
    if (email.length === 0 || password.length === 0) {
      showAlert('Please enter all the details');
    } else if (!email.includes('@')) {
      showAlert('Please enter valid email address');
    } else {
      try {
        setLoading(true);
        await login(email, password);
      } catch (e) {
        setLoading(false);
        showAlert(e);
      }
    }
  };

  return loading ? (
    <View
      style={{
        justifyContent: 'center',
        backgroundColor: white,
        flex: 1,
      }}>
      <ActivityIndicator size="large" color={primary}></ActivityIndicator>
    </View>
  ) : (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../assets/banners/applogo.png')}
          style={styles.logo}></Image>
        {/* <Text style={styles.welcomeStyle}> Welcome </Text> */}
        <FormInput
          labelValue={email}
          placeholder="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={newText => setEmail(newText)}></FormInput>
        <FormInput
          labelValue={password}
          placeholder="Password"
          iconType="lock"
          secureTextEntry={true}
          onChangeText={newText => setPassword(newText)}></FormInput>
        <FormButton
          title="Login"
          onPress={() => {
            checkValidFields();
          }}></FormButton>
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => {
            if (!email.includes('@')) {
              showAlert('Please enter email');
            } else {
              resetPassword(email);
            }
          }}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Login with facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => {
                console.log('pressed');
                fbLogin();
              }}></SocialButton>
            <SocialButton
              buttonTitle="Login with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => {
                // googleLogin();
              }}></SocialButton>
          </View>
        ) : null}
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}>
          <Text style={styles.navButtonText}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: white,
  },
  logo: {
    height: 250,
    width: 250,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 25,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: blue,
  },
  welcomeStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#051d5f',
    marginBottom: 20,
    fontWeight: '700',
  },
});
export default LoginScreen;
