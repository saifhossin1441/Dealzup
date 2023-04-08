import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import StackNavbar from '../components/StackNavbar';
import Login from '../screens/merchants/Login';
import CreateAccount from '../screens/merchants/CreateAccount';

export default function MerchantStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      // initialRouteName="Merchant Login"
      screenOptions={{
        header: StackNavbar,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        //   animationEnabled:
        //     Platform.OS == 'android' &&
        //     parseInt(deviceInfoModule.getSystemVersion()) > 9
        //       ? false
        //       : true,
      }}>
      <Stack.Screen
        name="Merchant Login"
        component={Login}
        // options={{headerShown: false}}
        initialParams={{dark: true}}
      />
      <Stack.Screen
        name="Merchant Register"
        component={CreateAccount}
        options={
          {
            // headerShown: false,
          }
        }
        initialParams={{dark: true}}
      />
      {/* <Stack.Screen
          name="Notification"
          component={Notification}
          // options={{
          //   animationEnabled:
          //     Platform.OS == 'android' &&
          //     parseInt(deviceInfoModule.getSystemVersion()) > 9
          //       ? false
          //       : true,
          // }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          // options={{
          //   animationEnabled:
          //     Platform.OS == 'android' &&
          //     parseInt(deviceInfoModule.getSystemVersion()) > 9
          //       ? false
          //       : true,
          // }}
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
        /> */}
    </Stack.Navigator>
  );
}
