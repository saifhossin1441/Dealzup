import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {ScrollView, View} from 'react-native';
import {categories} from '../../dummy/categories';
import Feather from 'react-native-vector-icons/Feather';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export default function Subcategories({route, navigation}) {
  const colors = [
    '#9DDAD1',
    '#F3A186',
    '#98B7E8',
    '#EC99CE',
    '#8281F3',
    '#EE8787',
    '#87D2EF',
    '#B59AE8',
    '#937BB4',
  ];
  const [wrapperWidth, setwrapperWidth] = useState(0);
  let counter = 0;
  const count = id => {
    if (counter > colors.length - 2) counter = 1;
    else counter++;
  };
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });
  const find_dimesions = ({x, y, width, height}) => {
    setwrapperWidth(width / 2);
  };

  return (
    <ScrollView style={styles.body}>
      <Animated.View
        style={[styles.wrapper, animatedStyles]}
        onLayout={event => {
          find_dimesions(event.nativeEvent.layout);
        }}>
        <View style={styles.categories}>
          <View style={styles.flex}>
            {route.params?.category.subcategories.map((item, id) => {
              count(id);
              return (
                <Pressable
                  onPress={() => {}}
                  key={id}
                  style={{
                    ...styles.subcategory,
                    backgroundColor: colors[counter],
                  }}>
                  <Image
                    source={item.image}
                    style={{...styles.categoryImage, marginHorizontal: 20}}
                  />

                  <Text style={{...styles.text, fontSize: 20}}>
                    {item.text}
                  </Text>
                  <View
                    style={{
                      ...styles.circle,
                      bottom: -100,
                      right: -125,
                    }}></View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fafafa',
    height: '100%',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
    marginTop: 7,
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: 15,
    paddingLeft: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categories: {
    width: '100%',
  },
  heading: {
    fontSize: 28,
    fontWeight: '900',
    color: '#ab4bea',
    letterSpacing: 1.5,
    marginLeft: 10,
  },
  underline: {
    position: 'absolute',
    width: 80,
    height: 3,
    borderRadius: 999,
    // backgroundColor: '#ff7420',
    backgroundColor: '#ab4bea',
    bottom: -3,
    left: 10,
  },
  category: {
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20,
    height: 180,
    borderRadius: 10,
    // shadowColor: 'rgba(0,0,0,1)',
    elevation: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  subcategory: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    height: 100,
    borderRadius: 10,
    // shadowColor: 'rgba(0,0,0,1)',
    elevation: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  circle: {
    width: 210,
    height: 170,
    backgroundColor: 'rgba(255,255,255,.15)',
    position: 'absolute',
    bottom: -110,
    borderRadius: 999,
    zIndex: 0,
  },
  categoryImage: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    position: 'relative',
    zIndex: 1,
    // borderRadius: 999,
  },
  text: {
    color: '#fff',
    fontSize: 2,
    fontFamily: 'Signika-Medium',
    textTransform: 'capitalize',
    position: 'relative',
    zIndex: 1,
  },
});
