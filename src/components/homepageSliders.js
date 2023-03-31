import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeCards from './homeCards';
import logo1 from '../assets/logo1.jpg';
import image1 from '../assets/slider1.jpg';
import image2 from '../assets/slider2.jpg';
import image3 from '../assets/slider3.jpg';
import {useNavigation} from '@react-navigation/native';
function HomepageSliders({heading, link}) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: 10,
        // paddingVertical: 20,
        // backgroundColor: 'red',
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
        }}>
        {/* <View style={styles.underline}></View> */}
        <Text style={styles.heading}> {heading}</Text>
        <Pressable
          onPress={() => {
            navigation.navigate(link);
          }}>
          <Feather
            style={styles.seeAll}
            name="chevron-right"
            size={25}
            color="#ff7420"
          />
        </Pressable>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{paddingTop: 5, paddingBottom: 35}}>
          <HomeCards name="Day 2 Day" logo={logo1} banner={image2} />
          <HomeCards name="Nutuyu" logo={logo1} banner={image1} />
          <HomeCards name="Leather Complex" logo={logo1} banner={image3} />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    // marginVertical: 15,
    fontFamily: 'Signika',
    fontWeight: '700',
    textTransform: 'capitalize',
    // color: '#ff7420',
    color: '#ab4bea',
    letterSpacing: 1.5,
  },
  seeAll: {
    marginVertical: 15,
    fontWeight: '900',
    // color: '#ff7420',
    color: '#ab4bea',
    letterSpacing: 1.5,
  },
  underline: {
    position: 'absolute',
    width: 50,
    height: 3,
    borderRadius: 999,
    // backgroundColor: '#ff7420',
    backgroundColor: '#ab4bea',
    bottom: 10,
    left: 13,
  },
});

export default HomepageSliders;
