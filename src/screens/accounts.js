import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Accounts({navigation}) {
  useEffect(() => {
    navigation.setParams({
      no_icons: true,
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.user_profile}>
        <Image source={require('../assets/avatar.jpg')} style={styles.avatar} />
        <Text style={styles.user_name}>Anas Alam</Text>
        <Text style={styles.mobile}>+91 70448 04030</Text>
      </View>
      <View style={styles.settings}>
        <View style={{...styles.setting, borderTopWidth: 0}}>
          <View style={{...styles.icon, backgroundColor: '#EE8787'}}>
            <FontAwesome5 name="user-alt" color="#fff" size={16} />
          </View>
          <Text style={styles.setting_text}>Edit Profile</Text>
          <Entypo name="chevron-thin-right" size={16} color="#333" />
        </View>
        <View style={styles.setting}>
          <View style={{...styles.icon, backgroundColor: '#8281F3'}}>
            <Ionicons name="ios-key-sharp" color="#fff" size={16} />
          </View>
          <Text style={styles.setting_text}>Change Password</Text>
          <Entypo name="chevron-thin-right" size={16} color="#333" />
        </View>
        <View style={styles.setting}>
          <View style={{...styles.icon, backgroundColor: '#9DDAD1'}}>
            <Image
              source={require('../assets/box.png')}
              style={{width: 17, height: 17, resizeMode: 'contain'}}
            />
          </View>
          <Text style={styles.setting_text}>Orders</Text>
          <Entypo name="chevron-thin-right" size={16} color="#333" />
        </View>
        <View style={styles.setting}>
          <View style={{...styles.icon, backgroundColor: '#98B7E8'}}>
            <Ionicons name="ios-card" color="#fff" size={16} />
          </View>
          <Text style={styles.setting_text}>Saved Cards</Text>
          <Entypo name="chevron-thin-right" size={16} color="#333" />
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 'auto', marginBottom: 30}}>
        <Text style={{fontSize: 14, fontWeight: '500', color: '#aaa'}}>
          Dealzup PVT. LTD.
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#aaa'}}>
          &copy; All right reserved. Since 2016
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fc',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  user_profile: {
    alignItems: 'center',
    marginTop: 'auto',
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  user_name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },
  mobile: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  settings: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 40,
    elevation: 10,
    shadowColor: '#aaa',
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  icon: {
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
  },
  setting_text: {
    fontSize: 16,
    color: '#333',
    marginRight: 'auto',
  },
});
