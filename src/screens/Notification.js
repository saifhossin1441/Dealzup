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
  const [notity, setNotity] = useState(false);
  useEffect(() => {
    navigation.setParams({
      no_icons: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      {notity ? (
        <ScrollView>
          <View>
            <View>
              <Text>Notification Recieved</Text>
              <Text>03:50 p.m.</Text>
            </View>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur placeat nihil pariatur fugiat voluptates doloribus
              deleniti, amet possimus consequatur enim!
            </Text>
          </View>
          <View>
            <View>
              <Text>Notification Recieved</Text>
              <Text>03:50 p.m.</Text>
            </View>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur placeat nihil pariatur fugiat voluptates doloribus
              deleniti, amet possimus consequatur enim!
            </Text>
          </View>
          <View>
            <View>
              <Text>Notification Recieved</Text>
              <Text>03:50 p.m.</Text>
            </View>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur placeat nihil pariatur fugiat voluptates doloribus
              deleniti, amet possimus consequatur enim!
            </Text>
          </View>
          <View>
            <View>
              <Text>Notification Recieved</Text>
              <Text>03:50 p.m.</Text>
            </View>
            <Text>
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
