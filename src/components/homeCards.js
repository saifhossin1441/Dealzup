import {Text} from 'react-native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import heartLiked from '../assets/heartLiked.png';
import heartEmpty from '../assets/heartEmpty.png';
import {BlurView} from '@react-native-community/blur';

import InsetShadow from 'react-native-inset-shadow';
function HomeCards({logo, banner, name, renderScreen}) {
  return (
    <View
      style={{
        ...styles.card,
        marginBottom: renderScreen ? 20 : 0,
        width: renderScreen ? '95%' : 320,
      }}>
      <View style={styles.absolute}>
        <BlurView
          overlayColor=""
          style={styles.blur}
          blurRadius={1}
          blurType="light"
          blurAmount={20}>
          {/* <Feather name="heart" size={20} color="#000" style={styles.heart} /> */}
          <View style={styles.blur}>
            <Image style={styles.heart} source={heartLiked} />
          </View>
        </BlurView>
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
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 999,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,.5)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.5)',
    right: 3,
    top: 3,
    zIndex: 2,
    // borderWidth: 5,
  },
  blur: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    resizeMode: 'cover',
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    borderRadius: 10,
    height: 200,
  },
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
    margin: 'auto',
  },
  logo: {width: 50, height: 50, borderRadius: 999},
});
export default HomeCards;
