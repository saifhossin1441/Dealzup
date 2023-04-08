import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

export default function ProductDetails({route, navigation}) {
  useEffect(() => {
    navigation.setParams({
      no_icons: true,
      page_name: 'Zomato',
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../assets/zomatoBanner.jpg')}
        style={{width: '100%', flex: 1, resizeMode: 'contain'}}
      />
    </View>
  );
}
