import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import refer from '../assets/refer.png';
import messenger from '../assets/messenger.png';
import whatsapp from '../assets/whatsapp.png';
import email from '../assets/email.png';
import link from '../assets/link.png';

function Refer() {
  return (
    <ScrollView
      style={styles.body}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 'auto',
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
              <Text style={{color: '#fff', fontSize: 20, margin: 'auto'}}>
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
    height: '100%',
    backgroundColor: '#E7EBF1',
    display: 'flex',
    flexDirection: 'column',
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
    width: '90%',
    height: 430,
    marginTop: 50,
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
    fontSize: 22,
    color: '#666',
    width: '70%',
    textAlign: 'center',
    textTransform: 'capitalize',
    lineHeight: 25,
  },
  orange: {
    color: '#ff7420',
    fontSize: 22,
    marginVertical: 20,
    fontWeight: 600,
  },
  codeContainer: {
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.05)',
    borderRadius: 10,
    height: 60,
    shadowColor: 'rgba(0,0,0,.3)',
    elevation: 15,
  },
  code: {
    color: '#1003A4',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    letterSpacing: 1,
    padding: 15,
    width: '70%',
  },

  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Refer;
