import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import refer from '../assets/refer-mobile.png';
import messenger from '../assets/messenger.png';
import whatsapp from '../assets/whatsapp.png';
import email from '../assets/email.png';
import link from '../assets/link.png';
import Navbar from '../components/navbar';

function Refer({navigation, route}) {
  useEffect(() => {
    navigation.setParams({
      no_icons: true,
    });
  }, []);

  return (
    <ScrollView
      style={styles.body}
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          ...styles.body,
        }}>
        <Image style={styles.illustration} source={refer} />
        <Text style={styles.text}>
          Share Your invite code with your friends and get points
        </Text>
        <Text style={styles.orange}>Invitation Code</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.code}>deal4uy3</Text>
          <View
            style={{
              ...styles.button,
            }}>
            <Pressable
              style={{...styles.button, width: '100%'}}
              android_ripple={{color: 'rgba(0,0,0,.1)', borderless: true}}>
              <Text style={{color: '#fff', fontSize: 18, margin: 'auto'}}>
                Copy
              </Text>
            </Pressable>
          </View>
        </View>
        <Text style={{...styles.text, marginVertical: 30}}>
          or share link via
        </Text>
        <View
          style={{
            width: '75%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image style={styles.icon} source={messenger} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              style={{
                ...styles.icon,
                width: 50,
                height: 50,
              }}
              source={whatsapp}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image style={{...styles.icon}} source={email} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image style={{...styles.icon}} source={link} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fafafa',
  },
  icon: {
    width: 40,
    height: 40,
  },
  button: {
    backgroundColor: '#ff7420',
    width: '30%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  illustration: {
    width: '80%',
    height: 320,
    resizeMode: 'contain',
  },
  heading: {
    color: '#1003A4',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    textTransform: 'capitalize',
    letterSpacing: 1,
  },
  text: {
    fontWeight: 600,
    fontSize: 16,
    color: '#666',
    width: '70%',
    textAlign: 'center',
    textTransform: 'capitalize',
    lineHeight: 18,
  },
  orange: {
    color: '#ff7420',
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 600,
    marginBottom: 15,
  },
  codeContainer: {
    width: '65%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.05)',
    borderRadius: 10,
    height: 45,
    shadowColor: 'rgba(0,0,0,.3)',
    elevation: 15,
  },
  code: {
    color: '#1003A4',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    letterSpacing: 1,
    // padding: 15,
    width: '70%',
    alignSelf: 'center',
    textAlign: 'center',
  },

  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Refer;
