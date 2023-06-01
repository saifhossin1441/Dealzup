import React from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Screen from '../components/Screen';

export default function Search({route, navigation}) {
  return (
    <Screen style={styles.container}>
      <View style={styles.searchbar}>
        <Pressable
          style={{paddingVertical: 5}}
          onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" color="#333" size={25} />
        </Pressable>
        <View style={styles.searchInput}>
          <TextInput
            placeholder="Search by name, category, subcategory..."
            placeholderTextColor="#c0c0c0"
            style={styles.input}
          />
          <Feather
            name="search"
            size={18}
            color="#333"
            style={{marginBottom: 2}}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.history_container}>
        <View style={styles.history}>
          <Octicons name="history" color="#333" size={18} />
          <Text style={styles.history_text}>Fashion</Text>
          <Octicons
            name="arrow-left"
            color="#333"
            size={20}
            style={styles.rotatingIcon}
          />
        </View>
        <View style={styles.history}>
          <Octicons name="history" color="#333" size={18} />
          <Text style={styles.history_text}>Day 2 Day</Text>
          <Octicons
            name="arrow-left"
            color="#333"
            size={20}
            style={styles.rotatingIcon}
          />
        </View>
        <View style={styles.history}>
          <Octicons name="history" color="#333" size={18} />
          <Text style={styles.history_text}>Food Delivery</Text>
          <Octicons
            name="arrow-left"
            color="#333"
            size={20}
            style={styles.rotatingIcon}
          />
        </View>
        <View style={styles.history}>
          <Octicons name="history" color="#333" size={18} />
          <Text style={styles.history_text}>Leather Skin</Text>
          <Octicons
            name="arrow-left"
            color="#333"
            size={20}
            style={styles.rotatingIcon}
          />
        </View>
        <View style={styles.history}>
          <Octicons name="history" color="#333" size={18} />
          <Text style={styles.history_text}>Jaguar Fashion</Text>
          <Octicons
            name="arrow-left"
            color="#333"
            size={20}
            style={styles.rotatingIcon}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 15,
    paddingHorizontal: 10,
    // width: '100%',
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.20)',
    marginLeft: 10,
    flex: 1,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 5,
    // fontWeight: '',
    // backgroundColor: '#e9e9e950',
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: '#333',
    flex: 1,
    fontFamily: 'Signika',
  },
  history_container: {
    paddingVertical: 8,
  },
  history: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  history_text: {
    flex: 1,
    color: '#333',
    marginHorizontal: 20,
    fontSize: 14,
    fontFamily: 'Signika-Medium',
  },
  rotatingIcon: {
    transform: [{rotate: '45deg'}],
  },
});
