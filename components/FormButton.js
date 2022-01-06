import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {primary} from '../utils/Colors';
import {screenHeight} from '../utils/Dimensions';

const FormButton = ({title, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.fontStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: screenHeight / 18,
    backgroundColor: primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  fontStyle: {fontSize: 18, fontWeight: 'bold', color: '#ffffff'},
});
