import {createContext} from 'react';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {showAlert} from '../utils/Utils';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const register = async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      throw e;
    }
  };

  const login = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      throw e;
    }
  };
  const phoneLogin = async mobile => {
    try {
      await auth().signInWithPhoneNumber(mobile);
    } catch (e) {
      throw e;
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };
  const resetPassword = Email => {
    auth()
      .sendPasswordResetEmail(Email)
      .then(function (user) {
        console.warn('A password reset link is sent to your email');
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        phoneLogin,
        register,
        logout,
        resetPassword,
        // googleLogin: async () => {
        //   try {
        //     // Get the users ID token
        //     const {idToken} = await GoogleSignin.signIn();

        //     // Create a Google credential with the token
        //     const googleCredential =
        //       auth.GoogleAuthProvider.credential(idToken);

        //     // Sign-in the user with the credential
        //     await auth()
        //       .signInWithCredential(googleCredential)
        //       // Use it only when user Sign's up,
        //       // so create different social signup function
        //       // .then(() => {
        //       //   //Once the user creation has happened successfully, we can add the currentUser into firestore
        //       //   //with the appropriate details.
        //       //   // console.log('current User', auth().currentUser);
        //       //   firestore().collection('users').doc(auth().currentUser.uid)
        //       //   .set({
        //       //       fname: '',
        //       //       lname: '',
        //       //       email: auth().currentUser.email,
        //       //       createdAt: firestore.Timestamp.fromDate(new Date()),
        //       //       userImg: null,
        //       //   })
        //       //   //ensure we catch any errors at this stage to advise us if something does go wrong
        //       //   .catch(error => {
        //       //       console.log('Something went wrong with added user to firestore: ', error);
        //       //   })
        //       // })
        //       //we need to catch the whole sign up process if it fails too.
        //       .catch(error => {
        //         console.log('Something went wrong with sign up: ', error);
        //       });
        //   } catch (error) {
        //     console.log({error});
        //   }
        // },
        fbLogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            await auth()
              .signInWithCredential(facebookCredential)
              // Use it only when user Sign's up,
              // so create different social signup function
              // .then(() => {
              //   //Once the user creation has happened successfully, we can add the currentUser into firestore
              //   //with the appropriate details.
              //   console.log('current User', auth().currentUser);
              //   firestore().collection('users').doc(auth().currentUser.uid)
              //   .set({
              //       fname: '',
              //       lname: '',
              //       email: auth().currentUser.email,
              //       createdAt: firestore.Timestamp.fromDate(new Date()),
              //       userImg: null,
              //   })
              //   //ensure we catch any errors at this stage to advise us if something does go wrong
              //   .catch(error => {
              //       console.log('Something went wrong with added user to firestore: ', error);
              //   })
              // })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (error) {
            console.log({error});
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
