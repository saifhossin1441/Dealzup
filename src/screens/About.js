import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import DrawerView from '../components/DrawerView';
import Navbar from '../components/navbar';
import Slick from 'react-native-slick';

export default function About({route, navigation}) {
  return (
    <DrawerView style={{backgroundColor: '#fafafa', flex: 1}}>
      <Navbar route={route} navigation={navigation} />
      <Slick
        showsButtons={false}
        autoplay={false}
        autoplayTimeout={4}
        activeDotColor="#ff7420"
        loop={false}>
        <View style={styles.slide}>
          <Image
            style={styles.sliderImage}
            source={require('../assets/about-1.png')}
          />
          <Image
            style={styles.backgroundImg}
            source={require('../assets/bck2.jpg')}
          />
          <View style={styles.content}>
            <Text style={styles.title}>Explore Dealz</Text>
            <Text style={styles.summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores accusantium a repellat. Asperiores omnis quam nam
              tempora fugit sed ex voluptate veniam? Ad, laudantium molestias.
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.sliderImage}
            source={require('../assets/about-2.png')}
          />
          <Image
            style={styles.backgroundImg}
            source={require('../assets/bck1.jpg')}
          />
          <View style={styles.content}>
            <Text style={styles.title}>Visit Stores</Text>
            <Text style={styles.summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores accusantium a repellat. Asperiores omnis quam nam
              tempora fugit sed ex voluptate veniam? Ad, laudantium molestias.
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.sliderImage}
            source={require('../assets/about-3.png')}
          />
          <Image
            style={styles.backgroundImg}
            source={require('../assets/bck3.jpg')}
          />
          <View style={styles.content}>
            <Text style={styles.title}>Ultimate Savings</Text>
            <Text style={styles.summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores accusantium a repellat. Asperiores omnis quam nam
              tempora fugit sed ex voluptate veniam? Ad, laudantium molestias.
            </Text>
          </View>
        </View>
      </Slick>
      {/* <ScrollView style={{flex: 3}}>
        <View style={styles.slide}>
          <Image
            style={styles.sliderImage}
            source={require('../assets/about-1.png')}
          />
          <Image
            style={styles.backgroundImg}
            source={require('../assets/bck2.jpg')}
          />
          <View style={styles.content}>
            <Text style={styles.title}>Explore Dealz</Text>
            <Text style={styles.summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores accusantium a repellat. Asperiores omnis quam nam
              tempora fugit sed ex voluptate veniam? Ad, laudantium molestias.
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.sliderImage}
            source={require('../assets/about-2.png')}
          />
          <Image
            style={styles.backgroundImg}
            source={require('../assets/bck1.jpg')}
          />
          <View style={styles.content}>
            <Text style={styles.title}>Visit Stores</Text>
            <Text style={styles.summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores accusantium a repellat. Asperiores omnis quam nam
              tempora fugit sed ex voluptate veniam? Ad, laudantium molestias.
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.sliderImage}
            source={require('../assets/about-3.png')}
          />
          <Image
            style={styles.backgroundImg}
            source={require('../assets/bck3.jpg')}
          />
          <View style={styles.content}>
            <Text style={styles.title}>Ultimate Savings</Text>
            <Text style={styles.summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores accusantium a repellat. Asperiores omnis quam nam
              tempora fugit sed ex voluptate veniam? Ad, laudantium molestias.
            </Text>
          </View>
        </View>
      </ScrollView> */}
    </DrawerView>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    // borderRadius: 10,
    position: 'relative',
  },
  sliderImage: {
    flex: 0.7,
    width: '100%',
    // height: '100%',
    // borderRadius: 10,
    resizeMode: 'contain',
    zIndex: 1,
  },
  backgroundImg: {
    width: '100%',
    height: '60%',
    opacity: 0.6,
    position: 'absolute',
    top: 0,
    left: 0,
    // resizeMode: 'contain',
  },
  content: {
    flex: 0.3,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Signika-SemiBold',
    color: '#333',
  },
  summary: {
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 20,
    color: '#555',
    fontFamily: 'Signika-Medium',
  },
});
