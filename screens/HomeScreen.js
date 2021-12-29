import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Swiper from 'react-native-swiper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import StarRating from '../components/StarRating';
import CategoryBtn from '../components/CategoryButton';
import {FlatList} from 'react-native-gesture-handler';
import {data} from '../models/data';
import Card from '../components/Card';

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <Card
        itemData={item}
        onPress={() => {
          navigation.navigate('ItemDetails', {itemData: item});
        }}
      />
    );
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.searchboxStyle}>
        <Feather
          name="search"
          size={25}
          style={{marginHorizontal: 10}}
          color="#FF6347"></Feather>
        <TextInput
          placeholder="Restaurant Name"
          style={{height: 40}}></TextInput>
      </View>
      <View style={styles.sliderContainer}>
        <Swiper
          height={200}
          autoplay
          dotColor="transparent"
          activeDotColor="transparent">
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}></Image>
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}></Image>
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}></Image>
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <CategoryBtn
          text="Restaurants"
          iconName="local-restaurant"
          onPress={() => {
            navigation.push('Main', {
              screen: 'CardListScreen',
              params: {
                title: 'Restaurant',
              },
            });
            // navigation.navigate('CardListScreen', {title: 'Restaurant'});
          }}></CategoryBtn>
        <CategoryBtn
          text="Fast-Food"
          iconName="fastfood"
          onPress={() => {
            navigation.push('Main', {
              screen: 'CardListScreen',
              params: {
                title: 'Fast-Food',
              },
            });
          }}></CategoryBtn>
        <CategoryBtn
          text="Sweets"
          iconName="icecream"
          onPress={() => {
            navigation.push('Main', {
              screen: 'CardListScreen',
              params: {
                title: 'Sweets',
              },
            });
          }}></CategoryBtn>
        <CategoryBtn
          text="Indian"
          iconName="food-bank"
          onPress={() => {
            navigation.push('Main', {
              screen: 'CardListScreen',
              params: {
                title: 'Indian',
              },
            });
          }}></CategoryBtn>
      </View>

      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <CategoryBtn
          text="Hotels"
          iconName="hotel"
          onPress={() => {
            navigation.push('Main', {
              screen: 'CardListScreen',
              params: {
                title: 'Hotels',
              },
            });
          }}></CategoryBtn>
        <CategoryBtn
          text="Drinks"
          iconName="liquor"
          onPress={() => {
            navigation.push('Main', {
              screen: 'CardListScreen',
              params: {
                title: 'Drinks',
              },
            });
          }}></CategoryBtn>
        <CategoryBtn
          text="Pizza"
          iconName="local-pizza"
          onPress={() => {
            navigation.push('Main', {
              screen: 'CardListScreen',
              params: {
                title: 'Pizza',
              },
            });
          }}></CategoryBtn>
        <CategoryBtn
          text="More"
          iconName="expand-more"
          onPress={() => {
            console.log('expand clicked');
          }}></CategoryBtn>
      </View>

      <Text style={styles.textstyle}>Top Picks for you</Text>
      <View style={{marginHorizontal: 8}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          nestedScrollEnabled
          keyExtractor={item => item.id}></FlatList>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchboxStyle: {
    flexDirection: 'row',
    alignItems: 'center',

    marginHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sliderContainer: {
    height: 200,
    width: '95%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },

  cardsWrapper: {
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
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
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  textstyle: {
    marginLeft: 10,
    marginVertical: 5,
    fontWeight: '600',
  },
});
export default HomeScreen;
