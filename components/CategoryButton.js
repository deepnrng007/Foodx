import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

const CategoryBtn = ({text, iconName, onPress}) => {
  return (
    <TouchableOpacity style={categoryBtnStyles.categoryBtn} onPress={onPress}>
      <View style={categoryBtnStyles.categoryIcon}>
        <Ionicons name={iconName} size={30} color="#FF6347" />
      </View>
      <Text style={categoryBtnStyles.categoryBtnTxt}>{text}</Text>
    </TouchableOpacity>
  );
};

const categoryBtnStyles = {
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
};
export default CategoryBtn;
