import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import HomeCards from './homeCards';
import logo1 from '../assets/logo1.jpg';
import image1 from '../assets/slider1.jpg';
import image2 from '../assets/slider2.jpg';
import image3 from '../assets/slider3.jpg';
function HomepageSliders({heading}) {
  return (
    <View style={{paddingHorizontal: 10, marginVertical: 0}}>
      <Text style={styles.heading}> {heading}</Text>
      <View>
        <ScrollView horizontal={true}>
          <HomeCards name="Luxary" logo={logo1} banner={image2} />
          <HomeCards name="Luxary" logo={logo1} banner={image1} />
          <HomeCards name="Luxary" logo={logo1} banner={image3} />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: '900',
    color: '#ff7420',
    letterSpacing: 1.5,
  },
});

export default HomepageSliders;
