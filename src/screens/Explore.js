import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { View, Text } from 'react-native';
import Slick from 'react-native-slick';
import Navbar from '../components/navbar';
import image1 from '../assets/slider1.jpg';
import image2 from '../assets/slider2.jpg';
import image3 from '../assets/slider3.jpg';
import zomatoBanner from '../assets/zomatoBanner.jpg';
import swiggyBanner from '../assets/swiggyBanner.jpg';
import { Image } from 'react-native';
import { categories } from '../../dummy/categories';
import HomepageSliders from '../components/homepageSliders';
import { BlurView } from '@react-native-community/blur';
import coupon from '../assets/coupon.png';
import ticket from '../assets/token.png';
import view from '../assets/viewAll.png';
import Screen from '../components/Screen';

function Explore({ navigation }) {
  const colors = [
    '#9DDAD1',
    '#F3A186',
    '#98B7E8',
    '#EC99CE',
    '#8281F3',
    '#EE8787',
    '#87D2EF',
    '#B59AE8',
  ];
  let counter = 0;
  const count = id => {
    if (counter > colors.length - 2) counter = 1;
    else counter++;
  };
  const categories2 = [...categories];
  categories2.length = 5;
  return (
    <ScrollView style={styles.body} contentContainerStyle={{ paddingBottom: 50 }}>
      <View style={styles.wrapper}>
        <Slick
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={4}
          activeDotColor="#ff7420"
          loop={true}>
          <View style={styles.slide}>
            <Image style={styles.sliderImage} source={swiggyBanner} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.sliderImage} source={zomatoBanner} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.sliderImage} source={image3} />
          </View>
        </Slick>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        {/* <Text style={styles.heading}>Top Categories</Text> */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {categories2.map((item, id) => {
            count();
            return (
              <TouchableOpacity
                activeOpacity={0.4}
                key={id}
                style={styles.category}
                onPress={() =>
                  navigation.navigate('Subcategories', {
                    subcategories: item.subcategories,
                  })
                }>
                <View
                  style={{
                    ...styles.shadow,
                    backgroundColor: colors[counter],
                  }}></View>
                <Image
                  source={item.image}
                  style={{
                    ...styles.categoryImage,
                  }}
                />
                <Text
                  style={{
                    color: '#555',
                    fontSize: 16,
                    marginTop: 10,
                    fontFamily: 'Signika-Medium',
                    textTransform: 'capitalize',
                  }}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            activeOpacity={0.4}
            style={styles.category}
            onPress={() => navigation.navigate('Categories')}>
            <View
              style={{
                ...styles.shadow,
                backgroundColor: colors[6],
              }}></View>
            <Image
              source={view}
              style={{
                ...styles.categoryImage,
                // marginTop: 10,
              }}
            />
            <Text
              style={{
                color: '#555',
                fontSize: 16,
                marginTop: 10,
                fontFamily: 'Signika-Medium',
                textTransform: 'capitalize',
              }}>
              View All
            </Text>
          </TouchableOpacity>
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
    // backgroundColor: '#fafafa',
    backgroundColor: '#f5f6fc',
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
    marginBottom: 30,
    position: 'relative',
  },
  shadow: {
    position: 'absolute',
    width: '70%',
    height: '55%',
    overflow: 'hidden',
    // left: '-50%',
    top: 25,
    // transform: [{translateX: 85}, {translateY: 50}],
    zIndex: 0,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,.05)',
  },
  categoryImage: {
    width: 75,
    height: 70,
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
