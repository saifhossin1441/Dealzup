import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {View, Platform} from 'react-native';
import Categories from '../screens/categories';
import DrawerNavigator from './DrawerNavigator';
import deviceInfoModule from 'react-native-device-info';
import Subcategories from '../screens/Subcategories';
import StackNavbar from '../components/StackNavbar';

export default function StackNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      screenOptions={{
        header: StackNavbar,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Search" component={Categories} />
      <Stack.Screen name="Notification" component={Categories} />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          animationEnabled:
            Platform.OS == 'android' &&
            parseInt(deviceInfoModule.getSystemVersion()) > 9
              ? false
              : true,
        }}
        // initialParams={{title: 'Browse Categories'}}
      />
      <Stack.Screen
        name="Subcategories"
        component={Subcategories}
        // initialParams={{title: 'Browse Subcategories'}}
      />
    </Stack.Navigator>
  );
}
