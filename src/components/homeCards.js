import {Text} from 'react-native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

function HomeCards({logo, banner, name}) {
  return (
    <View style={styles.card}>
      <View style={styles.absolute}>
        <Feather name="heart" size={20} color="#000" />
      </View>
      <Image style={styles.banner} source={banner} />
      <View style={styles.details}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.appealingText}>Friday Sales</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    position: 'relative',
    padding: 10,
    width: 320,
    borderRadius: 10,
    shadowColor: '#ccc',
    backgroundColor: '#fff',
    elevation: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    marginHorizontal: 7,
  },
  absolute: {
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: 2,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
  },
  banner: {width: '100%', resizeMode: 'stretch', borderRadius: 10},
  details: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  name: {
    color: '#333',
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  appealingText: {
    padding: 7,
    backgroundColor: '#90EE90',
    borderRadius: 10,
    color: '#006400',
    marginLeft: 'auto',
  },
  logo: {width: 50, height: 50, borderRadius: 999},
});
export default HomeCards;
