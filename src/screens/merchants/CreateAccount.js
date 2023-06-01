import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';

export default function CreateAccount({navigation}) {
  useEffect(() => {
    navigation.setParams({
      no_icons: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View>
          <Text style={styles.heading}>Become a</Text>
          <Text style={styles.heading}>Dealzup Member</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={{...styles.inputView, ...styles.borderBottom}}>
            <View style={styles.icon}>
              <FontAwesome5 name="id-card" size={20} color="#989ebe" />
            </View>
            <TextInput
              placeholder="Full Name"
              style={styles.input}
              placeholderTextColor="#989ebe"
            />
          </View>
          <View style={{...styles.inputView, ...styles.borderBottom}}>
            <View style={styles.icon}>
              <FontAwesome5 name="user" size={20} color="#989ebe" />
            </View>
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#989ebe"
            />
          </View>
          <View style={{...styles.inputView, ...styles.borderBottom}}>
            <View style={styles.icon}>
              <Foundation name="lock" size={20} color="#989ebe" />
            </View>
            <TextInput
              placeholder="Password"
              style={styles.input}
              placeholderTextColor="#989ebe"
            />
          </View>
          <View
            style={{
              ...styles.inputView,
              ...styles.borderTop,
              paddingBottom: 3,
            }}>
            <View style={styles.icon}>
              <Foundation name="lock" size={20} color="#989ebe" />
            </View>
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              secureTextEntry={true}
              placeholderTextColor="#989ebe"
            />
            {/* <Pressable style={styles.forgotButton}>
              <Text style={styles.forgotButtonText}>Forgot?</Text>
            </Pressable> */}
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: '#777'}}
          onPress={() =>
            navigation.navigate('Merchant Login', {no_icons: true})
          }>
          <Text style={styles.buttonText}>Already a member? Login</Text>
        </TouchableOpacity>
        <View style={styles.orView}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>
        <View style={styles.otherSignIn}>
          <Text style={styles.signInText}>Sign up using: </Text>
          <TouchableOpacity style={styles.logoBtn}>
            <Image
              source={require('../../assets/google-logo.png')}
              style={styles.logoBtnImage}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#0e101b',
    // backgroundColor: '#f5f6fc',
    padding: 30,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: '700',
    color: '#eee',
    // width: '%',
    // backgroundColor: 'red',
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 40,
    elevation: 30,
    shadowColor: '#444',
    marginBottom: 50,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
  },
  input: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
    color: '#555',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#989ebe20',
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: '#989ebe20',
  },
  icon: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  forgotButton: {
    paddingHorizontal: 15,
  },
  forgotButtonText: {
    fontSize: 16,
    color: '#989ebe',
    fontWeight: '500',
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#4c67ed',
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  orView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  orLine: {
    width: '40%',
    height: 2,
    backgroundColor: '#ddd',
  },
  orText: {
    color: '#ccc',
    fontWeight: '700',
  },
  otherSignIn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    marginRight: 15,
    fontSize: 16,
    fontWeight: '500',
    color: '#989ebe',
  },
  logoBtn: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    elevation: 30,
    shadowColor: '#ddd',
  },
  logoBtnImage: {
    width: 30,
    height: 30,
  },
});
