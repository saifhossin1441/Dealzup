import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function Notification({navigation}) {
  const [notity, setNotity] = useState(true);
  useEffect(() => {
    navigation.setParams({
      no_icons: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      {notity ? (
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 10}}>
          <View style={styles.notification}>
            <View style={styles.row}>
              <Text style={styles.title} numberOfLines={1}>
                Notification Recieved
              </Text>
              <Text style={styles.time}>03:50</Text>
            </View>
            <Text style={styles.summary}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur placeat nihil pariatur fugiat voluptates doloribus
              deleniti, amet possimus consequatur enim!
            </Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.row}>
              <Text style={styles.title} numberOfLines={1}>
                New Flyers in Cosmetics
              </Text>
              <Text style={styles.time}>03:50</Text>
            </View>
            <Text style={styles.summary}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur placeat nihil pariatur fugiat voluptates doloribus
              deleniti, amet possimus consequatur enim!
            </Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.row}>
              <Text style={styles.title} numberOfLines={1}>
                Offers starting soon...
              </Text>
              <Text style={styles.time}>03:50</Text>
            </View>
            <Text style={styles.summary}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur placeat nihil pariatur fugiat voluptates doloribus
              deleniti, amet possimus consequatur enim!
            </Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.row}>
              <Text style={styles.title} numberOfLines={1}>
                Time to stop scrolling, start shopping
              </Text>
              <Text style={styles.time}>03:50</Text>
            </View>
            <Text style={styles.summary}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur placeat nihil pariatur fugiat voluptates doloribus
              deleniti, amet possimus consequatur enim!
            </Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.row}>
              <Text style={styles.title} numberOfLines={1}>
                Notification Recieved
              </Text>
              <Text style={styles.time}>03:50</Text>
            </View>
            <Text style={styles.summary}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur placeat nihil pariatur fugiat voluptates doloribus
              deleniti, amet possimus consequatur enim!
            </Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.row}>
              <Text style={styles.title} numberOfLines={1}>
                New Deals from Apna Kirana
              </Text>
              <Text style={styles.time}>03:50</Text>
            </View>
            <Text style={styles.summary}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur placeat nihil pariatur fugiat voluptates doloribus
              deleniti, amet possimus consequatur enim!
            </Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.row}>
              <Text style={styles.title} numberOfLines={1}>
                Money added to wallet successfully!
              </Text>
              <Text style={styles.time}>03:50</Text>
            </View>
            <Text style={styles.summary}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur placeat nihil pariatur fugiat voluptates doloribus
              deleniti, amet possimus consequatur enim!
            </Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.row}>
              <Text style={styles.title} numberOfLines={1}>
                Become a vendor to increase your sales.
              </Text>
              <Text style={styles.time}>03:50</Text>
            </View>
            <Text style={styles.summary}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur placeat nihil pariatur fugiat voluptates doloribus
              deleniti, amet possimus consequatur enim!
            </Text>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.inner_container}>
          <Image
            source={require('../assets/notification.png')}
            style={styles.image}
          />
          <Text style={styles.heading}>No Notification</Text>
          <Text style={styles.greyText}>
            If there's a notification, it will arrive here...
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  notification: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: '#fafafa',
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Signika-SemiBold',
  },
  time: {
    color: '#ccc',
    fontSize: 14,
    fontFamily: 'Signika-Medium',
  },
  summary: {
    color: '#aaa',
    fontSize: 14,
    fontFamily: 'Signika',
  },
  inner_container: {
    flex: 0.7,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 25,
    fontFamily: 'Signika-SemiBold',
    color: '#aaa',
  },
  greyText: {
    fontSize: 16,
    fontFamily: 'Signika',
    color: '#b9b9b9',
    marginTop: 5,
  },
});
