import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {black, primary, white} from '../utils/Colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {MakePayment} from '../network/PaymentGateway';
import CountButton from '../components/CountButton';
import {screenWidth} from '../utils/Dimensions';

const CartScreen = ({navigation}) => {
  const [data1, setData] = useState([]);
  const [obj, setObj] = useState({});
  const [price, setPrice] = useState(0);

  var sum = 0;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    var data = await AsyncStorage.getItem('items');
    setObj(JSON.parse(data));
    var map = Object.values(JSON.parse(data));
    setData(map);

    map.map(it => {
      var total = it.price * it.count;

      sum += total;

      setPrice(sum);
    });
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.viewStyle}>
        <View style={{flexDirection: 'row'}}>
          {item.dishType === 'veg' ? (
            <Image
              source={require('../assets/banners/veg.png')}
              style={styles.iconStyle}></Image>
          ) : (
            <Image
              source={require('../assets/banners/non-veg.png')}
              style={styles.iconStyle}></Image>
          )}
          <View style={{justifyContent: 'space-around', flex: 3}}>
            <Text style={styles.textStyle2}>{item.name}</Text>
            <Text style={styles.textStyle2}>₹{item.price}</Text>
          </View>
          <CountButton
            item={item}
            removeItem={async () => {
              delete obj[item.id];
              console.log(obj);
              setData(Object.values(obj));
              await AsyncStorage.removeItem('items');
              await AsyncStorage.setItem('items', JSON.stringify(obj));
              setPrice(price - item.price);
            }}
            addItem={count => {
              var s = price;
              s = s + item.price;
              setPrice(s);
            }}
            decreaseItem={count => {
              var s = price;
              s = s - item.price;

              setPrice(s);
            }}
          />
        </View>
      </View>
    );
  };

  return data1.length === 0 ? (
    <Image
      source={require('../assets/banners/empty.png')}
      style={{
        width: '100%',
        height: '100%',
      }}></Image>
  ) : (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <IonIcons name="ios-timer-outline" color="green" size={18}></IonIcons>
          <Text style={styles.textStyle1}>Delivery in 54 minutes</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={styles.textStyle}>Your Cart</Text>
          <IonIcons name="cart" color={black} size={20}></IonIcons>
        </View>

        <FlatList
          data={data1}
          renderItem={renderItem}
          keyExtractor={item => item.id}></FlatList>

        <View style={{marginTop: 15}}>
          <Text style={[styles.textStyle, {marginBottom: 8}]}>Offers</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'space-between'}}
            onPress={() => {
              alert('Currently no offers are avilable');
            }}>
            <IonIcons name="gift-sharp" size={18} color="black"></IonIcons>
            <Text style={{color: black}}> Select a coupan code</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 25}}>
          <View style={styles.viewStyle1}>
            <Text style={{color: black, fontSize: 15}}>Item Total</Text>
            <Text style={{color: black}}>₹{price}</Text>
          </View>
          <View style={styles.viewStyle1}>
            <Text style={{fontSize: 14}}>Delivery Charges</Text>
            <Text style={{color: black}}>₹49</Text>
          </View>
        </View>
        <View style={styles.viewStyle1}>
          <Text style={{fontSize: 14}}>Taxes & charges</Text>
          <Text style={{color: black}}>67.5</Text>
        </View>
        <View style={styles.viewStyle1}>
          <Text style={styles.textStyle}>Grand Total</Text>
          <Text style={styles.textStyle}>₹{price + 49 + 67}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.checkoutButtonStyle}
        onPress={() => {
          MakePayment((price + 49 + 67).toString() + '00');
          AsyncStorage.clear();
        }}>
        <Text style={styles.textStyleWhite}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutButtonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: primary,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',

    backgroundColor: white,
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: 16,
    color: black,
    fontWeight: '700',
  },
  viewStyle1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  textStyleWhite: {
    fontSize: 16,
    color: white,
    fontWeight: '700',
  },
  buttonTextStyle1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyle1: {
    fontSize: 14,
    color: black,
    fontWeight: '4',
    marginLeft: 5,
  },
  textStyle2: {
    fontSize: 14,
    color: black,
    fontWeight: '700',
    marginLeft: 10,
  },
  textStyle3: {color: primary, fontSize: 25, marginHorizontal: 10},
  iconStyle: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  viewStyle: {
    paddingTop: 12,
    backgroundColor: white,
  },
  countBoxStyle: {
    borderColor: primary,
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    height: 40,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle: {
    flex: 3,
    backgroundColor: primary,
    marginHorizontal: 8,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: white,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CartScreen;
