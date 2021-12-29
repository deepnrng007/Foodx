import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {Avatar, Caption, Title, TouchableRipple} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={profileScreenStyles.container}>
      <ScrollView>
        <View style={profileScreenStyles.userInfoSection}>
          <View style={{flexDirection: 'row'}}>
            <Avatar.Image
              source={{
                uri: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
              }}
              size={100}></Avatar.Image>
            <View style={profileScreenStyles.textContainer}>
              <Title
                style={[
                  profileScreenStyles.title,
                  {
                    marginTop: 20,
                    marginBottom: 5,
                  },
                ]}>
                Deepak Narang
              </Title>
              <Caption style={profileScreenStyles.caption}>@deep.007</Caption>
            </View>
          </View>
        </View>

        <View style={profileScreenStyles.userInfoSection2}>
          <InfoText
            iconName="map-marker-radius"
            text="Gurgaon, Haryana"></InfoText>
          <InfoText iconName="phone" text="+91 8881560098"></InfoText>
          <InfoText iconName="email" text="deep.007@gmail.com"></InfoText>
        </View>

        <View style={profileScreenStyles.infoBoxWrapper}>
          <View
            style={[
              profileScreenStyles.infoBox,
              {borderRightColor: '#dddddd', borderRightWidth: 1},
            ]}>
            <Title>$245</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={profileScreenStyles.infoBox}>
            <Title>$12</Title>
            <Caption>Orders</Caption>
          </View>
        </View>

        <View style={profileScreenStyles.menuWrapper}>
          <MenuItem
            itemIcon="heart"
            itemName="Your Favourites"
            onPress={() => {}}
          />
          <MenuItem
            itemIcon="credit-card"
            itemName="Payments"
            onPress={() => {}}
          />
          <MenuItem
            itemIcon="share"
            itemName="Share with Friends"
            onPress={() => {}}
          />
          <MenuItem itemIcon="phone" itemName="Support" onPress={() => {}} />
          <MenuItem
            itemIcon="settings"
            itemName="Your Favourites"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MenuItem = ({itemIcon, itemName, onPress}) => {
  return (
    <TouchableRipple
      onPress={() => {
        onPress;
      }}>
      <View style={profileScreenStyles.menuItem}>
        <Icon name={itemIcon} size={25} color="#ff6347"></Icon>
        <Text style={profileScreenStyles.menuItemText}>{itemName}</Text>
      </View>
    </TouchableRipple>
  );
};
const InfoText = ({iconName, text}) => {
  return (
    <View style={profileScreenStyles.row}>
      <MaterialIcon
        name={iconName}
        size={22}
        style={profileScreenStyles.iconStyle}></MaterialIcon>
      <Text style={profileScreenStyles.textStyle}>{text}</Text>
    </View>
  );
};
const profileScreenStyles = StyleSheet.create({
  textContainer: {marginLeft: 10},
  iconStyle: {color: '#777777'},
  textStyle: {color: '#777777', marginLeft: 10},
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 10,
  },
  userInfoSection2: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
  },
});
export default ProfileScreen;
