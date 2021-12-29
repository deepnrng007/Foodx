import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {primary, white} from '../utils/Colors';

const MenuCard = ({item, onPress, onAddPress}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        {item.dishType === 'veg' ? (
          <Image
            source={require('../assets/banners/veg.png')}
            style={styles.iconStyle}></Image>
        ) : (
          <Image
            source={require('../assets/banners/non-veg.png')}
            style={styles.iconStyle}></Image>
        )}
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.priceStyle}>₹{item.price}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={onPress} style={{flex: 1, marginTop: 5}}>
          <Image
            style={{height: 90, width: 90, alignSelf: 'center', flex: 2.5}}
            source={item.image}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={onAddPress} style={{flex: 0.8}}>
          <View style={styles.countBoxStyle}>
            <Text style={styles.buttonTextStyle}>Add</Text>
            <Text style={{color: primary, fontSize: 20, marginHorizontal: 10}}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 130,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  iconStyle: {
    height: 25,
    width: 25,
    marginTop: 5,
  },
  priceStyle: {
    marginTop: 5,
  },
  countBoxStyle: {
    borderColor: primary,
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonTextStyle: {
    color: 'black',

    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});
