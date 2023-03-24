import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Navbar({routeName}) {
  return (
    <View style={styles.navbar}>
      <View style={styles.header}>
        <View style={styles.navName}>
          <Octicons
            name="three-bars"
            color="#333"
            size={22}
            style={{marginRight: 20}}
          />
          <Text
            style={{
              color: '#333',
              fontSize: 28,
              fontWeight: '500',
              verticalAlign: 'middle',
            }}>
            {routeName}
          </Text>
        </View>
        <View style={styles.header}>
          {/* <Ionicons
            style={{marginRight: 20}}
            name="ios-search"
            size={23}
            color="#333"
          /> */}
          <Ionicons
            name="search"
            style={{marginRight: 20}}
            size={22}
            color="#333"
          />
          <Material name="storefront-outline" size={23} color="#333" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#fafafa',
    // backgroundColor: 'orange',
    width: '100%',
    paddingHorizontal: 23,
    paddingTop: 25,
    paddingBottom: 20,
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
  },
  navName: {
    flexDirection: 'row',
    alignItems: 'baseline',
    // backgroundColor: 'red',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
});

export default Navbar;
