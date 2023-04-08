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
import Search from '../screens/Search';
import Notification from '../screens/Notification';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';
import Accounts from '../screens/accounts';
import Products from '../screens/products';
import ProductDetails from '../screens/Product-details';

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
        options={{
          // animationEnabled:
          //   Platform.OS == 'android' &&
          //   parseInt(deviceInfoModule.getSystemVersion()) > 9
          //     ? false
          //     : true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          // animationEnabled:
          //   Platform.OS == 'android' &&
          //   parseInt(deviceInfoModule.getSystemVersion()) > 9
          //     ? false
          //     : true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={
          {
            // animationEnabled:
            //   Platform.OS == 'android' &&
            //   parseInt(deviceInfoModule.getSystemVersion()) > 9
            //     ? false
            //     : true,
          }
        }
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={
          {
            // animationEnabled:
            //   Platform.OS == 'android' &&
            //   parseInt(deviceInfoModule.getSystemVersion()) > 9
            //     ? false
            //     : true,
          }
        }
        // initialParams={{title: 'Browse Categories'}}
      />
      <Stack.Screen
        name="Subcategories"
        component={Subcategories}
        // initialParams={{title: 'Browse Subcategories'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        // initialParams={{title: 'Browse Subcategories'}}
      />
      <Stack.Screen
        name="Create Account"
        component={CreateAccount}
        // initialParams={{title: 'Browse Subcategories'}}
      />
      <Stack.Screen
        name="Accounts"
        component={Accounts}
        // initialParams={{title: 'Browse Subcategories'}}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        // initialParams={{title: 'Browse Subcategories'}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        // initialParams={{title: 'Browse Subcategories'}}
      />
    </Stack.Navigator>
  );
}
