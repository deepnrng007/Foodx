import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MenuCard from '../components/MenuCard';
import RBSheet from 'react-native-raw-bottom-sheet';
import {screenHeight, screenWidth} from '../utils/Dimensions';
import {ScrollView} from 'react-native-gesture-handler';
import {primary, white} from '../utils/Colors';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';

const ItemDetails = ({route, navigation}) => {
  const refRBSheet = useRef();

  const [item, setItem] = useState({});

  const itemData = route.params.itemData;

  const [count, setCount] = useState(0);

  const [obj, setObj] = useState({});

  const isVisible = useIsFocused();

  useEffect(() => {
    async function fetchData() {
      try {
        var i = await AsyncStorage.getItem('items');

        if (i != null) {
          var data = JSON.parse(i);
          setCount(parseInt(Object.keys(data).length.toString()));
          console.log(count);
        } else {
          setCount(0);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [isVisible]);

  const renderItem = ({item}) => {
    return (
      <MenuCard
        item={item}
        onPress={() => {
          refRBSheet.current.open();
          setItem(item);
        }}
        onAddPress={async () => {
          obj[item.id] = item;

          item['count'] = 1;

          setObj({...obj});
          console.log(obj);
          await AsyncStorage.setItem('items', JSON.stringify(obj));
          var data = await AsyncStorage.getItem('items');
          setCount(parseInt(Object.keys(JSON.parse(data)).length.toString()));
          // await AsyncStorage.setItem(
          //   'itemCount',
          //   Object.keys(JSON.parse(data)).length.toString(),
          // );

          // var newCount = await AsyncStorage.getItem('itemCount');

          // setCount(parseInt(newCount));
          // console.log(JSON.parse(data));
          // console.log(count);
          // console.log(Object.values(obj));
        }}></MenuCard>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{itemData.title}</Text>
      <Text style={styles.descriptionStyle}>{itemData.description}</Text>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {borderRightColor: '#dddddd', borderRightWidth: 1},
          ]}>
          <Text style={styles.reviewTextStyle}>₹{itemData.budget}</Text>
          <Text>{itemData.budget} for Two</Text>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.ratingStyle}>
            <IonIcons name="star" color="black" size={18}></IonIcons>
            <Text style={styles.reviewTextStyle}>{itemData.rating}</Text>
          </View>
          <Text>{itemData.reviews} Ratings</Text>
        </View>
      </View>

      <Text style={[styles.titleStyle, {marginVertical: 10}]}>
        Items For You
      </Text>
      <FlatList
        data={itemData.menu}
        renderItem={renderItem}
        style={{paddingHorizontal: 10}}></FlatList>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: primary,
          },
        }}
        height={screenHeight * 0.7}>
        <SheetItems
          item={item}
          navigation={navigation}
          itemData={itemData}
          refence={refRBSheet}></SheetItems>
      </RBSheet>
      {count > 0 ? (
        <View
          flexDirection="row"
          style={{
            backgroundColor: primary,
            padding: 5,
            height: screenHeight * 0.075,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                color: white,
                fontWeight: '900',
                fontSize: 18,
              }}>
              {count} item
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
            }}
            onPress={() => {
              // for (var member in obj) delete obj[member];
              navigation.push('Main', {
                screen: 'CartScreen',
                params: {
                  title: 'Cart',
                },
              });
            }}>
            <View flexDirection="row">
              <Text style={{color: white, fontWeight: '900', fontSize: 18}}>
                View Cart
              </Text>
              <IonIcons
                name="ios-chevron-forward"
                size={22}
                color={white}></IonIcons>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const SheetItems = ({item, navigation, itemData, refence}) => {
  const [count, setCount] = useState(1);

  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <ScrollView style={{}}>
        <Image
          source={item.image}
          resizeMode="center"
          style={styles.imageStyle}></Image>
        {item.dishType === 'veg' ? (
          <Image
            source={require('../assets/banners/veg.png')}
            style={styles.iconStyle}></Image>
        ) : (
          <Image
            source={require('../assets/banners/non-veg.png')}
            style={styles.iconStyle}></Image>
        )}
        <Text style={styles.textStyle}>{item.name}</Text>
        <Text style={styles.textStyle1}>₹{item.price}</Text>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <View style={styles.countBoxStyle}>
          <TouchableOpacity
            onPress={() => {
              count === 1 ? null : setCount(count - 1);
            }}>
            <Text style={{color: primary, fontSize: 25, marginHorizontal: 10}}>
              –
            </Text>
          </TouchableOpacity>
          <Text style={styles.buttonTextStyle1}>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
            }}>
            <Text style={{color: primary, fontSize: 25, marginHorizontal: 10}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            refence.current.close();
            navigation.navigate('CartScreen', {
              title: itemData.title,
              item: item,
              itemCount: count,
            });
          }}>
          <Text style={styles.buttonTextStyle}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  countBoxStyle: {
    borderColor: primary,
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    height: 50,
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
  iconStyle: {
    height: 25,
    width: 25,
    margin: 5,
  },
  imageStyle: {
    height: screenHeight * 0.4,
    width: screenWidth,
    alignSelf: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  buttonTextStyle1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyle1: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  container: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    color: 'black',
    paddingHorizontal: 10,
  },
  descriptionStyle: {
    fontSize: 14,
    color: 'grey',
    paddingHorizontal: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 60,
    marginTop: 10,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewTextStyle: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '700',
    color: 'black',
  },
});

export default ItemDetails;
