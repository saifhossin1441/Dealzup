import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native';
import DrawerView from '../components/DrawerView';
import Navbar from '../components/navbar';
import transaction from '../assets/transaction.png';
import financial from '../assets/financial-profit.png';
import {Image} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import logo1 from '../assets/logo1.jpg';
import swiggy from '../assets/swiggy.png';
import hospital from '../assets/hospital.png';
import zomato from '../assets/zomato.png';

const TransactionCard = ({logo, name, increment, amount, date}) => {
  return (
    <View style={styles.transactionCard}>
      <Image
        source={logo ? logo : financial}
        style={styles.transactionCardImage}
      />
      <View style={{justifyContent: 'space-evenly'}}>
        <Text style={styles.transactionCardText}>
          {name ? name : 'Money Added'}
        </Text>
        <Text
          style={{...styles.transactionCardText, fontSize: 15, color: '#666'}}>
          {date}
        </Text>
      </View>

      <Text
        style={{
          ...styles.transactionAmount,
          color: increment ? '#4AB364' : '#E84726',
          backgroundColor: increment ? '#F8FFF8' : '#F9EFEE',
          borderColor: increment ? '#4AB364' : '#E84726',
        }}>
        {increment ? '+' : '-'}${amount}
      </Text>
    </View>
  );
};

function Wallet({navigation, route}) {
  const [filterOption, setfilterOption] = useState(false);

  useEffect(() => {
    navigation.setParams({
      no_icons: true,
    });
  }, []);
  return (
    <DrawerView>
      <Navbar route={route} navigation={navigation} />
      <View>
        <ScrollView style={styles.body}>
          <View style={styles.balanceContainer}>
            <Text
              style={{
                ...styles.lightText,
                color: '#fff',
                fontWeight: '700',
                fontSize: 25,
                marginBottom: 5,
              }}>
              Hello Salsaal,
            </Text>

            <Text style={styles.lightText}>Your Available Balance:</Text>
            <Text style={styles.amount}>$80,000.00</Text>
            <Text style={{...styles.lightText, fontSize: 16, color: '#fff'}}>
              Today 24 March 2023
            </Text>
            <View style={styles.circle}></View>
            <View style={{...styles.circle, top: '75%', right: '-15%'}}></View>
          </View>
          <View style={styles.basicContainer}>
            <View style={styles.card}>
              <View style={styles.iconContainer}>
                <Image style={styles.cardIcon} source={financial} />
              </View>
              <Text
                style={{
                  color: '#000',
                  fontSize: 25,
                  textTransform: 'capitalize',
                }}>
                Add Money
              </Text>
              <Text style={{...styles.cardText, color: '#96CFAA'}}>
                add money to your account
              </Text>
            </View>
            <View style={{...styles.card, backgroundColor: '#F0E6E8'}}>
              <View style={styles.iconContainer}>
                <Image style={styles.cardIcon} source={transaction} />
              </View>
              <Text
                style={{
                  color: '#000',
                  fontSize: 25,
                  textTransform: 'capitalize',
                }}>
                View expenses
              </Text>
              <Text style={{...styles.cardText, color: '#EEB5B3'}}>
                view all latest transactions
              </Text>
            </View>
          </View>
          <View style={styles.basicContainer}>
            <Text
              style={{
                color: '#555',
                fontSize: 25,
                fontWeight: '600',
                marginVertical: 20,
              }}>
              Transaction History
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setfilterOption(true)}>
              <View style={styles.option}>
                <Octicons name="history" size={14} color="#333" />
                <Text style={styles.optionText}>All</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              borderColor: 'rgba(0,0,0,.2)',
              borderWidth: 0.5,
              marginBottom: 20,
            }}>
            <TransactionCard
              logo={swiggy}
              name="Swiggy"
              increment={false}
              date="24 March 2023"
              amount={500}
            />
            <TransactionCard
              logo={hospital}
              name="Hospitalo"
              increment={true}
              date="17 June 2023"
              amount={250}
            />
            <TransactionCard
              logo={zomato}
              name="Zomato"
              increment={false}
              date="Today"
              amount={300}
            />
            <TransactionCard
              logo={logo1}
              name="PapaEatz"
              increment={true}
              date="5 September 2023"
              amount={450}
            />
            <TransactionCard
              // logo={logo1}
              // name="Swiggy"
              increment={true}
              date="24 March 2023"
              amount={100}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => {}}>
          <View>
            <Octicons name="plus" size={25} color="#fff" />
            {/* <Text style={styles.optionText}>All</Text> */}
          </View>
        </TouchableOpacity>
      </View>
    </DrawerView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fafafa',
    height: '100%',
    width: '100%',
    paddingHorizontal: 10,
  },
  basicContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceContainer: {
    marginVertical: 20,
    backgroundColor: '#F3A186',
    borderRadius: 20,
    position: 'relative',
    padding: 20,
    paddingVertical: 30,
    overflow: 'hidden',
  },
  lightText: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  amount: {
    color: '#fff',
    fontSize: 40,
    marginVertical: 15,
    marginBottom: 15,
    fontWeight: '700',
    letterSpacing: 2,
  },
  circle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 999,
    right: '-20%',
    top: 0,
    backgroundColor: 'rgba(255,255,255,.15)',
  },
  card: {
    width: '48%',
    flexDirection: 'column',
    padding: 15,
    paddingHorizontal: 10,
    backgroundColor: '#E6F0EE',
    borderRadius: 20,
    shadowColor: '#555',
    elevation: 10,
    marginBottom: 15,
  },
  iconContainer: {
    marginLeft: 'auto',
    backgroundColor: 'rgba(255,255,255,.5)',
    padding: 10,
    borderRadius: 999,
    marginBottom: 70,
  },
  cardIcon: {
    width: 40,
    height: 40,
  },
  cardText: {
    fontSize: 16,
    marginTop: 5,
    textTransform: 'capitalize',
  },
  option: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
    padding: 15,
    paddingVertical: 5,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#333',
    marginLeft: 5,
    fontSize: 18,
    letterSpacing: 0.8,
  },
  transactionCard: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 0.5,
    marginVertical: 1,
  },
  transactionCardImage: {
    width: 50,
    height: 50,
    borderRadius: 999,
    marginRight: 15,
    resizeMode: 'stretch',
  },
  transactionCardText: {
    color: '#000',
    fontSize: 20,
    marginBottom: 3,
  },
  transactionAmount: {
    marginLeft: 'auto',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 20,
  },
  button: {
    position: 'absolute',
    bottom: 80,
    borderRadius: 999,
    right: 30,
    backgroundColor: '#96CFAA',
    padding: 15,
    paddingHorizontal: 18,
  },
});
export default Wallet;
