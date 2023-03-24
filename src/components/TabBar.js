import React from 'react';
import {Button, Text, View, Image, StyleSheet} from 'react-native';

export default function TabBar() {
  return (
    <View style={styles.tabBar}>
      <View style={styles.tabButton}>
        <Image
          source={require('../assets/home.png')}
          style={{
            width: 23,
            height: 23,
            ...styles.icon,
          }}
        />
      </View>
      <View style={styles.tabButton}>
        <Image
          source={require('../assets/deals.png')}
          style={{
            width: 30,
            height: 30,
            ...styles.icon,
          }}
        />
      </View>
      <View style={styles.tabButton}>
        <Image
          source={require('../assets/offer.png')}
          style={{
            width: 30,
            height: 30,
            ...styles.icon,
          }}
        />
      </View>
      <View style={styles.tabButton}>
        <Image
          source={require('../assets/flyers.png')}
          style={{
            width: 30,
            height: 30,
            ...styles.icon,
          }}
        />
      </View>
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
