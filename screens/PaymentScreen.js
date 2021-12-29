import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

export const MakePayment = amount => {
  var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_test_yCQtK3Jd72IrJg',
    amount: amount,
    name: 'foo',
    prefill: {
      email: 'void@razorpay.com',
      contact: '9191919191',
      name: 'Razorpay Software',
    },
    theme: {color: '#F37254'},
  };
  RazorpayCheckout.open(options)
    .then(data => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    })
    .catch(error => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
};
