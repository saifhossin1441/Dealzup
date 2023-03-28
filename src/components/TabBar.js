import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';

export default function TabBar({navigation, state}) {
  return (
    <View style={styles.tabBar}>
      <Pressable
        style={styles.tabButton}
        onPress={() => navigation.navigate('Explore')}>
        <Image
          source={
            state.index === 0
              ? require('../assets/home-active.png')
              : require('../assets/home.png')
          }
          style={{
            width: 23,
            height: 23,
            ...styles.icon,
          }}
        />
      </Pressable>
      <Pressable
        style={styles.tabButton}
        onPress={() => navigation.navigate('Deals')}>
        <Image
          source={
            state.index === 1
              ? require('../assets/deals-active.png')
              : require('../assets/deals.png')
          }
          style={{
            width: 30,
            height: 30,
            ...styles.icon,
          }}
        />
      </Pressable>
      <Pressable
        style={styles.tabButton}
        onPress={() => navigation.navigate('Offers')}>
        <Image
          source={
            state.index === 2
              ? require('../assets/offer-active.png')
              : require('../assets/offer.png')
          }
          style={{
            width: 30,
            height: 30,
            ...styles.icon,
          }}
        />
      </Pressable>
      <Pressable
        style={styles.tabButton}
        onPress={() => navigation.navigate('Flyers')}>
        <Image
          source={
            state.index === 3
              ? require('../assets/flyers-active.png')
              : require('../assets/flyers.png')
          }
          style={{
            width: 30,
            height: 30,
            ...styles.icon,
          }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fafafa',
    paddingVertical: 15,
    width: '95%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 15,
    elevation: 10,
    shadowColor: '#000',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.05)',
  },
  tabButton: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  icon: {
    resizeMode: 'contain',
  },
});
