import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import DrawerView from '../components/DrawerView';
import Navbar from '../components/navbar';
import contact from '../assets/contactUs.png';
import faq from '../assets/faq.png';

import Feather from 'react-native-vector-icons/Feather';

function Contact({route, navigation}) {
  useEffect(() => {
    navigation.setParams({
      no_icons: true,
    });
  }, []);
  const [chevrons, setchevrons] = useState([]);
  const dummyData = [
    {
      question: 'How to purchase on dealzup ?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi voluptatum nobis provident inventore ullam commodi itaque, hic praesentium. Labore sint adipisci nesciunt hic nobis animi voluptate ipsum cupiditate eos sit.',
    },
    {
      question: 'How to have discount on dealzup ?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi voluptatum nobis provident inventore ullam commodi itaque, hic praesentium. Labore sint adipisci nesciunt hic nobis animi voluptate ipsum cupiditate eos sit.',
    },
    {
      question: 'how do i become a merchant ?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi voluptatum nobis provident inventore ullam commodi itaque, hic praesentium. Labore sint adipisci nesciunt hic nobis animi voluptate ipsum cupiditate eos sit.',
    },
    {
      question: 'what is wallet in dealzup',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi voluptatum nobis provident inventore ullam commodi itaque, hic praesentium. Labore sint adipisci nesciunt hic nobis animi voluptate ipsum cupiditate eos sit.',
    },
    {
      question: 'How to purchase on dealzup ?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi voluptatum nobis provident inventore ullam commodi itaque, hic praesentium. Labore sint adipisci nesciunt hic nobis animi voluptate ipsum cupiditate eos sit.',
    },
  ];
  console.log(chevrons);
  const chevronHandler = id => {
    if (chevrons.includes(id)) setchevrons(chevrons.filter(item => item != id));
    else setchevrons([...chevrons, id]);
  };
  return (
    <DrawerView>
      <SafeAreaView style={styles.body}>
        <Navbar route={route} navigation={navigation} />
        <ScrollView style={{padding: 10}}>
          <View
            style={{
              width: '100%',
              backgroundColor: '#F3A18630',
              borderRadius: 10,
            }}>
            <Image style={styles.image} source={faq} />
          </View>
          <Text style={styles.heading}>Frequently Asked Questions</Text>
          <View style={styles.accordian}>
            {dummyData.map((item, id) => (
              <View style={styles.itemAccordian} key={id}>
                <View style={styles.header}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => chevronHandler(id)}
                    accessibilityElementsHidden={true}
                    style={styles.basicConatiner}>
                    <Text style={{...styles.accordianContent, maxWidth: '90%'}}>
                      {item.question}
                    </Text>
                    <Feather
                      name={
                        chevrons.includes(id) ? 'chevron-up' : 'chevron-down'
                      }
                      size={20}
                      color="#555"
                    />
                  </TouchableOpacity>
                </View>
                {chevrons.includes(id) && (
                  <View style={styles.header}>
                    <Text style={styles.accordianContent}>{item.answer}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
          <Text style={styles.heading}>Still Got Doubt ?</Text>
          <View
            style={{
              backgroundColor: '#98B7E835',
              width: '100%',
              borderRadius: 10,
            }}>
            <Image source={contact} style={styles.image} />
          </View>
          <View
            style={{
              ...styles.accordian,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              padding: 15,
              marginVertical: 25,
            }}>
            <Text
              style={{
                ...styles.heading,
                marginTop: 10,
                marginLeft: 0,
              }}>
              Contact Us For More Details !
            </Text>
            <TextInput
              style={styles.input}
              cursorColor="#999"
              placeholder="First Name"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              cursorColor="#999"
              placeholder="Last Name"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              cursorColor="#999"
              placeholder="Email"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              cursorColor="#999"
              placeholder="Phone"
              placeholderTextColor="#999"
              keyboardType="number-pad"
            />
            <TextInput
              style={{...styles.input, width: '100%', verticalAlign: 'top'}}
              cursorColor="#999"
              placeholder="Message"
              placeholderTextColor="#999"
              multiline={true}
              numberOfLines={5}
            />
            <View style={styles.button}>
              <Pressable
                style={{padding: 10}}
                android_ripple={{color: 'rgba(0,0,0,.1)', borderless: true}}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: 15,
                    letterSpacing: 1,
                  }}>
                  SUBMIT
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </DrawerView>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fafafa',
    flex: 1,
  },
  basicConatiner: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  heading: {
    color: '#555',
    fontSize: 25,
    letterSpacing: 2,
    marginVertical: 25,
    fontWeight: '600',
    marginLeft: 5,
  },
  image: {
    width: '60%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  accordian: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,.2)',
  },
  itemAccordian: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    padding: 20,
    width: '100%',
    borderBottomColor: 'rgba(0,0,0,.4)',
    borderBottomWidth: 0.5,
  },
  accordianContent: {
    color: '#555',
    textTransform: 'capitalize',
    fontSize: 20,
    letterSpacing: 1,
    lineHeight: 25,
  },
  input: {
    width: '48%',
    borderRadius: 7,
    borderWidth: 0.6,
    borderColor: 'rgba(0,0,0,.15)',
    fontSize: 18,
    padding: 10,
    letterSpacing: 1.5,
    marginBottom: 15,
    color: '#999',
  },
  button: {
    backgroundColor: '#ff7420',
    borderRadius: 5,
    marginLeft: 'auto',
    marginTop: 10,
  },
});
export default Contact;
