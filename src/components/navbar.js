import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/FontAwesome5';

function Navbar({route, navigation}) {
  console.log(Object.keys(navigation));
  return (
    <View style={styles.navbar}>
      <View style={styles.navName}>
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={styles.button}>
          <Octicons name="three-bars" color="#333" size={20} />
        </Pressable>
        <Text
          style={{
            color: '#333',
            fontSize: 22,
            fontWeight: '500',
            verticalAlign: 'middle',
          }}>
          {route?.name}
        </Text>
      </View>
      <View style={styles.header}>
        {route.params?.no_icons || route.params?.no_search ? null : (
          <Pressable
            style={{
              ...styles.button,
              transform: [{translateY: 0}],
              marginRight: 10,
            }}
            onPress={() => navigation.navigate('Search')}>
            <Ionicons name="search" size={22} color="#333" />
          </Pressable>
        )}
        {route.params?.no_icons || route.params?.no_notification ? null : (
          <Pressable
            style={{
              ...styles.button,
              transform: [{translateY: 0}],
              marginRight: 0,
            }}
            onPress={() => navigation.navigate('Notification')}>
            <Fontisto name="bell" size={21} color="#333" />
          </Pressable>
        )}
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
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
  },
  navName: {
    flexDirection: 'row',
    alignItems: 'baseline',
    // backgroundColor: 'red',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  button: {
    padding: 5,
    marginRight: 10,
    transform: [{translateY: 0.5}],
    // backgroundColor: 'blue',
  },
});

export default Navbar;
