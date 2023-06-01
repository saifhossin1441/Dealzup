import React, {useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import BannerCard from '../components/bannerCard';
import DrawerView from '../components/DrawerView';
import Navbar from '../components/navbar';
import zomatoBanner from '../assets/zomatoBanner.jpg';
import zomato from '../assets/zomato.png';

const Section = ({heading, color}) => {
  return (
    <View>
      <Text style={{...styles.heading, backgroundColor: color}}>{heading}</Text>
      {[1].map((_, id) => {
        return (
          <BannerCard
            key={id}
            name="Zomato"
            logo={zomato}
            banner={zomatoBanner}
            message="Zomato offering the Summer discount of the year!"
            appealingText="Sales Mania"
            wishlist={true}
          />
        );
      })}
    </View>
  );
};
function Wishlist({route, navigation}) {
  useEffect(() => {
    navigation.setParams({
      no_icons: true,
    });
  }, []);
  return (
    <DrawerView>
      <View style={styles.body}>
        <Navbar route={route} navigation={navigation} />
        <ScrollView style={{padding: 10}}>
          <Section heading="Flyers" color="#87D2EF" />
          <Section heading="Deals" color="#8281F3" />
          <Section heading="Offers" color="#EE8787" />
        </ScrollView>
      </View>
    </DrawerView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  heading: {
    textTransform: 'uppercase',
    letterSpacing: 2,
    padding: 10,
    width: '40%',
    color: '#fff',
    fontSize: 22,
    borderRadius: 10,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    marginTop: 12,
    fontWeight: 600,
    shadowColor: '#333',
    elevation: 15,
  },
});
export default Wishlist;
