import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {View, Text, Pressable, StyleSheet, Platform, StatusBar} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function StackNavbar({route, navigation}) {
  const bg_color = route?.params?.dark ? '#0e101b' : '#fafafa';
  const color = route?.params?.dark ? '#eee' : '#333';

  return (
    <View
      style={{
        ...styles.navbar,
        paddingLeft: 22,
        backgroundColor: bg_color,
      }}>
      <View style={styles.navName}>
        <Pressable
          style={{
            ...styles.button,
            marginRight: 13,
            paddingHorizontal: 0,
          }}
          onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={25} color={color} />
        </Pressable>
        <Text
          style={{
            color: color,
            fontSize: 22,
            fontWeight: '500',
            verticalAlign: 'middle',
          }}>
          {route.params?.page_name || route?.name}
        </Text>
      </View>

      <View style={styles.header}>
        {route.params?.no_icons || route.params?.no_search ? null : (
          <Pressable
            style={{
              ...styles.button,
              marginTop: 0,
              marginRight: 0,
            }}
            onPress={() => navigation.navigate('Search')}>
            <Ionicons name="search" size={22} color="#333" />
          </Pressable>
        )}
        {/* {route.params?.no_icons || route.params?.no_notification ? null : (
            <Pressable
              style={{
                ...styles.button,
                marginTop: 0,
                marginRight: 0,
              }}>
              <Fontisto name="bell" size={21} color="#333" />
            </Pressable>
          )} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    // backgroundColor: 'orange',
    width: '100%',
    paddingHorizontal: 23,
    paddingTop: Platform.OS == 'android'?  StatusBar.currentHeight  : 50,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  navName: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  button: {
    padding: 5,
    marginRight: 10,
    marginTop: 4,
    // backgroundColor: 'blue',
  },
});
