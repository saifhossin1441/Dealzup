import {Text} from 'react-native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import heartLiked from '../assets/heartLiked.png';
import heartEmpty from '../assets/heartEmpty.png';

import InsetShadow from 'react-native-inset-shadow';
function HomeCards({logo, banner, name}) {
  return (
    <View style={styles.card}>
      <View style={styles.absolute}>
        <InsetShadow
          containerStyle={{...styles.shadow}}
          left={true}
          top={true}
          right={true}
          bottom={true}
          shadowColor="#000"
          shadowRadius={10}
          shadowOpacity={1}
          shadowOffset={10}
          //   elevation={25}
        >
          {/* <Feather name="heart" size={20} color="#000" /> */}
          <Image style={styles.heart} source={heartLiked} />
        </InsetShadow>
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
    // padding: 10,
    width: 320,
    borderRadius: 10,
    shadowColor: '#c3bfca',
    backgroundColor: '#fff',
    elevation: 20,
    borderWidth: 0,
    borderColor: 'none',
    marginHorizontal: 7,
  },
  absolute: {
    position: 'absolute',
    right: 3,
    top: 3,
    zIndex: 2,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    // borderWidth: 5,
    alignItems: 'center',
  },
  shadow: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {width: '100%', resizeMode: 'stretch', borderRadius: 10, height: 200},
  details: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
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
  heart: {
    width: 20,
    height: 20,
  },
  logo: {width: 50, height: 50, borderRadius: 999},
});
export default HomeCards;
