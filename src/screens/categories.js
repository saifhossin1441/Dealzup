import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ScrollView, View} from 'react-native';
import {categories} from '../../dummy/categories';
import Feather from 'react-native-vector-icons/Feather';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
function Categories({route, navigation}) {
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
          {/* <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 30,
              alignItems: 'center',
              position: 'relative',
            }}>
            <View style={styles.underline}></View>
            <Text style={styles.heading}>Browse Categories</Text>
          </View> */}
          <View style={styles.flex}>
            {categories.map((item, id) => {
              count(id);
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    navigation.navigate('Subcategories', {
                      subcategories: item.subcategories,
                    });
                  }}
                  key={id}
                  style={{
                    ...styles.category,
                    backgroundColor: colors[counter],
                  }}>
                  <Image source={item.image} style={styles.categoryImage} />
                  <Text style={styles.text}>{item.text}</Text>
                  <View style={styles.circle}></View>
                </TouchableOpacity>
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
    paddingHorizontal: 10,
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
    height: 160,
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
    fontSize: 18,
    fontFamily: 'Signika-Medium',
    paddingHorizontal: 10,
    marginTop: 10,
    textTransform: 'capitalize',
    position: 'relative',
    zIndex: 1,
  },
});
export default Categories;
