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
function Categories() {
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
  const [category, setcategory] = useState(null);
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 30,
              alignItems: 'center',
              position: 'relative',
            }}>
            <View style={styles.underline}></View>
            <Text style={styles.heading}>Browse Categories</Text>
          </View>
          <View style={styles.flex}>
            {categories.map((item, id) => (
              <>
                {count(id)}
                <Pressable
                  onPress={() => {
                    setcategory(item);
                    offset.value = withSpring(-wrapperWidth);
                  }}
                  key={id}
                  style={{
                    ...styles.category,
                    backgroundColor: colors[counter],
                  }}>
                  <Image source={item.image} style={styles.categoryImage} />
                  <Text style={styles.text}>{item.text}</Text>
                  <View style={styles.circle}></View>
                </Pressable>
              </>
            ))}
          </View>
        </View>
        <View style={styles.categories}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
              position: 'relative',
            }}>
            <View style={{...styles.underline, width: 150, left: 35}}></View>
            <Pressable onPress={() => (offset.value = withSpring(0))}>
              <Feather name="chevron-left" size={25} color="#333" />
            </Pressable>
            <Text style={styles.heading}>Browse SubCategories</Text>
          </View>
          <View style={styles.flex}>
            {category &&
              category.subcategories.map((item, id) => (
                <>
                  {count(id)}
                  <Pressable
                    onPress={() => (offset.value = withSpring(0))}
                    key={id}
                    style={{
                      ...styles.subcategory,
                      backgroundColor: colors[counter],
                    }}>
                    <Image
                      source={item.image}
                      style={{...styles.categoryImage, marginHorizontal: 20}}
                    />

                    <Text style={{...styles.text, fontSize: 25}}>
                      {item.text}
                    </Text>
                    <View
                      style={{
                        ...styles.circle,
                        bottom: -100,
                        right: -125,
                      }}></View>
                  </Pressable>
                </>
              ))}
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
    marginVertical: 50,
    marginTop: 20,
  },
  wrapper: {
    width: '200%',
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categories: {
    width: '49%',
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
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    height: 150,
    borderRadius: 10,
    // shadowColor: 'rgba(0,0,0,1)',
    elevation: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  circle: {
    width: 250,
    height: 200,
    backgroundColor: 'rgba(255,255,255,.15)',
    position: 'absolute',
    bottom: -110,
    borderRadius: 999,
    zIndex: 0,
  },
  categoryImage: {
    width: 95,
    height: 95,
    resizeMode: 'cover',
    position: 'relative',
    zIndex: 1,
    // borderRadius: 999,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 600,
    marginTop: 10,
    textTransform: 'capitalize',
    position: 'relative',
    zIndex: 1,
  },
});
export default Categories;
