import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';

function Login({navigation}) {
  useEffect(() => {
    navigation.setParams({
      no_icons: true,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Hi there!</Text>
        <Text style={styles.heading}>Welcome Back.</Text>
      </View>
      <View style={styles.inputContainer}>
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
        <View
          style={{...styles.inputView, ...styles.borderTop, paddingBottom: 3}}>
          <View style={styles.icon}>
            <Foundation name="lock" size={20} color="#989ebe" />
          </View>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor="#989ebe"
          />
          <Pressable style={styles.forgotButton}>
            <Text style={styles.forgotButtonText}>Forgot?</Text>
          </Pressable>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.button, backgroundColor: '#777'}}
        onPress={() => navigation.navigate('Merchant Register')}>
        <Text style={styles.buttonText}>Create a new Account</Text>
      </TouchableOpacity>
      <View style={styles.orView}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orLine} />
      </View>
      <View style={styles.otherSignIn}>
        <Text style={styles.signInText}>Sign in using: </Text>
        <TouchableOpacity style={styles.logoBtn}>
          <Image
            source={require('../../assets/google-logo.png')}
            style={styles.logoBtnImage}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#0e101b',
    padding: 30,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 32,
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
    shadowColor: '#bbb',
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
    elevation: 0,
    shadowColor: '#bbb',
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
    elevation: 0,
    shadowColor: '#ddd',
  },
  logoBtnImage: {
    width: 30,
    height: 30,
  },
});
