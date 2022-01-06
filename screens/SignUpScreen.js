import React, {useState} from 'react';
import {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../Providers/AuthProvider';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import {showAlert} from '../utils/Utils';
import {primary, white} from '../utils/Colors';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedpassword, setConfirmedPassword] = useState('');
  const [error, setError] = useState({
    userError: '',
    passError: '',
  });
  const [loading, setLoading] = useState(false);
  const {register, googleLogin, fbLogin} = useContext(AuthContext);

  const checkErrorOrRegister = async () => {
    if (password != confirmedpassword) {
      showAlert('Please enter valid password');
    } else if (email.length < 4 && password.length < 6) {
      showAlert('Email or password is invalid');
    } else {
      try {
        setLoading(true);
        await register(email, password);
      } catch (e) {
        setLoading(false);
        showAlert(e.message);
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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textStyle}> Create an Account</Text>
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
        <FormInput
          labelValue={confirmedpassword}
          placeholder="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
          onChangeText={newText => setConfirmedPassword(newText)}></FormInput>
        <FormButton
          title="Sign Up"
          onPress={() => {
            checkErrorOrRegister();
          }}></FormButton>

        <View style={styles.textPrivate}>
          <Text>By registering, you confirm that you accept our</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.color_textPrivate, {color: primary}]}>
              Terms of Service
            </Text>
          </TouchableOpacity>
          <Text> and </Text>
          <Text style={[styles.color_textPrivate, {color: primary}]}>
            Privacy Policy
          </Text>
        </View>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="SignUp with facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => {
                fbLogin();
              }}></SocialButton>
            <SocialButton
              buttonTitle="SignUp with Google"
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
            navigation.navigate('LoginScreen');
          }}>
          <Text style={styles.navButtonText}>Already a user? Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
    backgroundColor: 'white',
    flex: 1,
  },

  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  textStyle: {
    fontSize: 30,
    marginBottom: 30,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
});
