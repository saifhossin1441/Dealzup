import React, {useState} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function BannerCard({name, logo, banner, message, appealingText, wishlist}) {
  const [hearted, sethearted] = useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => sethearted(!hearted)}
          style={styles.iconConatiner}>
          {wishlist ? (
            <FontAwesome
              name="heart"
              size={22}
              color="#fc4736"
              style={styles.heart}
            />
          ) : (
            <FontAwesome
              name="heart"
              size={22}
              color={hearted ? '#fc4736' : '#99999970'}
              style={styles.heart}
            />
          )}
          {/* <FontAwesome
            name="heart"
            size={22}
            color={hearted ? '#fc4736' : '#99999970'}
            style={styles.heart}
          /> */}
        </TouchableOpacity>
      </View>
      <Image source={banner} style={styles.banner} />
      <View style={styles.details}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.appealingText}>{appealingText}</Text>
        </View>
        <View
          style={{marginTop: 30, flexDirection: 'row', alignItems: 'center'}}>
          <SimpleLineIcons
            name="location-pin"
            size={20}
            color="#555"
            style={{marginLeft: -3}}
          />
          <Text style={styles.location}>
            Picnic Garden , Kolkata West Bengal
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: 'auto',
              // width: '30%',
              flex: 0.3,
            }}>
            <MaterialCommunityIcons
              name="signal-distance-variant"
              size={20}
              color="#555"
            />
            <Text style={{...styles.location, maxWidth: '100%', flex: 0}}>
              2 km Away
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderColor: 'rgba(0,0,0,.2)',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  info: {
    padding: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#333',
    fontSize: 20,
    marginLeft: 7,
    fontFamily: 'Signika-Bold',
    // fontWeight: '700',
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 999,
  },
  banner: {
    width: '100%',
    resizeMode: 'stretch',
    height: 220,
  },
  iconConatiner: {
    marginLeft: 'auto',
    padding: 10,
    backgroundColor: 'rgba(150,150,150,.1)',
    borderRadius: 999,
  },
  details: {
    padding: 15,
    flexDirection: 'column',
  },
  message: {
    flex: 1,
    color: '#333',
    letterSpacing: 1.5,
    textTransform: 'capitalize',
    fontSize: 15,
    fontFamily: 'Signika-Medium',
    // fontWeight: '00',
    maxWidth: '70%',
    lineHeight: 20,
    marginRight: 5,
  },
  appealingText: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: '#90EE90',
    borderRadius: 10,
    color: '#006400',
    fontFamily: 'Signika-SemiBold',
    // fontWeight: '500',
    fontSize: 16,
    marginLeft: 'auto',
  },
  location: {
    flex: 0.65,
    color: '#666',
    letterSpacing: 1,
    textTransform: 'capitalize',
    fontSize: 14,
    fontFamily: 'Signika-SemiBold',
    // fontWeight: '700',
    marginLeft: 7,
    // maxWidth: '70%',
  },
});
export default BannerCard;
