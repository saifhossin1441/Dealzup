import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import Slick from 'react-native-slick';
import Navbar from '../components/navbar';
import image1 from '../assets/slider1.jpg';
import image2 from '../assets/slider2.jpg';
import image3 from '../assets/slider3.jpg';
import {Image} from 'react-native';
import {categories} from '../../dummy/categories';
import HomepageSliders from '../components/homepageSliders';
import coupon from '../assets/coupon.png';
import ticket from '../assets/token.png';
function Browse() {
  return (
    <ScrollView style={styles.body}>
      <Navbar />
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
              <Image style={styles.categoryImage} source={item.image} />
              <Text
                style={{
                  color: '#333',
                  fontSize: 16,
                  marginTop: 5,
                  textTransform: 'capitalize',
                }}>
                {item.text}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <HomepageSliders heading="TOP FLYERS" />
      <HomepageSliders heading="TOP DEALS" />
      <HomepageSliders heading="TOP OFFERS" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f7f7f7',
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
  },
  categoryImage: {
    width: 75,
    height: 75,
    resizeMode: 'cover',
    // borderRadius: 999,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Browse;
