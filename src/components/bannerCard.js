import React, {useState} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function BannerCard({name, logo, banner, message, appealingText}) {
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
          <FontAwesome
            name="heart"
            size={22}
            color={hearted ? '#fc4736' : '#99999970'}
            style={styles.heart}
          />
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
              width: '30%',
            }}>
            <MaterialCommunityIcons
              name="signal-distance-variant"
              size={20}
              color="#555"
            />
            <Text style={{...styles.location, maxWidth: '100%'}}>
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
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: 30,
  },
  info: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#555',
    fontSize: 20,
    marginLeft: 7,
  },
  logo: {
    width: 40,
    height: 40,
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
    color: '#666',
    letterSpacing: 1.5,
    textTransform: 'capitalize',
    fontSize: 17,
    fontWeight: 'bold',
    maxWidth: '70%',
    lineHeight: 20,
  },
  appealingText: {
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: '#90EE90',
    borderRadius: 10,
    color: '#006400',
    fontSize: 16,
    marginLeft: 'auto',
  },
  location: {
    color: '#000',
    letterSpacing: 1,
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 7,
    maxWidth: '70%',
  },
});
export default BannerCard;
