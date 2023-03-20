import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Navbar() {
  return (
    <View style={styles.navbar}>
      <View style={styles.header}>
        <Text
          style={{
            color: '#fff',
            fontSize: 25,
            fontWeight: '600',
          }}>
          Logo
        </Text>
        <View style={styles.header}>
          <Entypo
            style={{marginRight: 20}}
            name="location"
            size={23}
            color="#fff"
          />
          <FontAwesome5 name="business-time" size={23} color="#fff" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#ff7420',
    width: '100%',
    padding: 30,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Navbar;
