import React, {useState} from 'react';
import {Image, StyleSheet, View, Text, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import heartLiked from '../assets/heartLiked.png';
import heartEmpty from '../assets/heartEmpty.png';
import {BlurView} from '@react-native-community/blur';

import InsetShadow from 'react-native-inset-shadow';
function HomeCards({logo, banner, name, renderScreen}) {
  const [hearted, setHearted] = useState(false);
  return (
    <View
      style={{
        ...styles.card,
        marginBottom: renderScreen ? 20 : 0,
        width: renderScreen ? '95%' : 320,
      }}>
      <Pressable
        style={{
          ...styles.absolute,
          backgroundColor: hearted ? '#fc4736' : '#bcbcbc',
          borderColor: hearted ? '#eee' : '#bcbcbc',
        }}
        onPress={() => setHearted(!hearted)}>
        {/* <BlurView
          overlayColor=""
          style={styles.blur}
          blurRadius={1}
          blurType="light"
          blurAmount={20}> */}
        {/* <View style={styles.blur}> */}
        <Fontisto name="heart" size={15} color="#fff" style={styles.heart} />
        {/* <Image style={styles.heart} source={heartEmpty} /> */}
        {/* </View> */}
        {/* </BlurView> */}
      </Pressable>
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
    borderWidth: 1,
    borderColor: '#ddd',
    // elevation: 20,
    marginHorizontal: 7,
  },
  absolute: {
    width: 35,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 999,
    alignItems: 'center',
    position: 'absolute',
    // backgroundColor: 'rgba(255,255,255,.5)',
    // backgroundColor: '#bcbcbc',
    // backgroundColor: '#fc4736',
    borderWidth: 1,
    // borderColor: '#fff',
    // borderColor: '#bcbcbc',
    right: 5,
    top: 5,
    zIndex: 2,
    elevation: 3,
    shadowColor: '#000',
    // borderWidth: 5,
  },
  // blur: {
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: 'transparent',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  banner: {
    width: '100%',
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    // borderRadius: 10,
    height: 200,
    // elevation: 20,
    // shadowColor: '#aaa',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  name: {
    color: '#333',
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: '600',
  },
  appealingText: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: '#90EE90',
    borderRadius: 10,
    color: '#006400',
    fontSize: 12,
    marginLeft: 'auto',
  },
  heart: {
    // width: 20,
    // height: 20,
    // margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  logo: {width: 30, height: 30, borderRadius: 999},
});
export default HomeCards;
