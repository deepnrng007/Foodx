import {Alert} from 'react-native';

export const showAlert = e => {
  Alert.alert('Error', `${e}`, [
    {
      text: 'OK',
      onPress: () => {
        console.log('OK Pressed');
      },
    },
  ]);
};
