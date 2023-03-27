import React from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import Slick from 'react-native-slick';
import Navbar from '../components/navbar';
import image1 from '../assets/slider1.jpg';
import image2 from '../assets/slider2.jpg';
import image3 from '../assets/slider3.jpg';
import {Image} from 'react-native';
import {categories} from '../../dummy/categories';
import HomepageSliders from '../components/homepageSliders';
import {BlurView} from '@react-native-community/blur';
import coupon from '../assets/coupon.png';
import ticket from '../assets/token.png';

function Explore(props) {
  console.log(Object.keys(props));

  return (
    <ScrollView style={styles.body}>
      <View style={styles.wrapper}>
        <Slick
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={4}
          activeDotColor="#ff7420"
          loop={true}>
          <View style={styles.slide}>
            <Image style={styles.sliderImage} source={image1} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.sliderImage} source={image2} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.sliderImage} source={image3} />
          </View>
        </Slick>
      </View>
      <View style={{paddingHorizontal: 10}}>
        {/* <Text style={styles.heading}>Top Categories</Text> */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {categories.map((item, id) => (
            <View key={id} style={styles.category}>
              <View
                style={{
                  ...styles.shadow,
                  backgroundColor: item.backgroundColor,
                }}>
                <BlurView
                  overlayColor=""
                  blurType="light"
                  blurAmount={10}
                  blurRadius={5}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </View>
              <Image
                source={item.image}
                style={{
                  ...styles.categoryImage,
                  transform: [{rotateY: id === 0 ? '180deg' : '0deg'}],
                }}
              />
              <Text
                style={{
                  color: '#333',
                  fontSize: 16,
                  marginTop: 10,
                  textTransform: 'capitalize',
                }}>
                {item.text}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <HomepageSliders heading="TOP FLYERS" link="Flyers" />
      <HomepageSliders heading="TOP DEALS" link="Deals" />
      <HomepageSliders heading="TOP OFFERS" link="Offers" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  body: {
    // backgroundColor: '#f3f3f3',
    backgroundColor: '#fafafa',
    height: '100%',
  },
  wrapper: {
    height: 250,
    marginVertical: 10,
    marginHorizontal: 10,
    marginBottom: 0,
  },
  heading: {
    fontSize: 20,
    color: '#333',
    marginVertical: 15,
    fontWeight: '600',
  },
  slide: {
    width: '100%',
    borderRadius: 10,
  },
  sliderImage: {
    width: '100%',
    height: '90%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  category: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20,
    position: 'relative',
  },
  shadow: {
    position: 'absolute',
    width: 70,
    height: 70,
    overflow: 'hidden',
    left: '-50%',
    top: '-50%',
    transform: [{translateX: 85}, {translateY: 50}],
    zIndex: 0,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,.05)',
  },
  categoryImage: {
    width: 65,
    height: 65,
    resizeMode: 'cover',
    // borderRadius: 999,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Explore;
