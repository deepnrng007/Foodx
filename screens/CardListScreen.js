import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Card from '../components/Card';
import {data} from '../models/data';
import {white} from '../utils/Colors';

const CardListScreen = ({navigation, route}) => {
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
  const newData = data.filter(item => {
    return item.categories === route.params.title;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={newData}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </View>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: white,
  },
});
