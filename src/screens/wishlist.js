import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import DrawerView from '../components/DrawerView';
import Navbar from '../components/navbar';

function Wishlist({route, navigation}) {
  useEffect(() => {
    navigation.setParams({
      no_icons: true,
    });
  }, []);
  return (
    <DrawerView>
      <SafeAreaView style={styles.body}>
        <Navbar route={route} navigation={navigation} />
        <ScrollView></ScrollView>
      </SafeAreaView>
    </DrawerView>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
export default Wishlist;
