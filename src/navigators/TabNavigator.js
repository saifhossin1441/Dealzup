import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import DrawerView from '../components/DrawerView';
import Navbar from '../components/navbar';
import TabBar from '../components/TabBar';
import Deals from '../screens/deals';
import Explore from '../screens/Explore';
import Flyers from '../screens/flyers';
import Offer from '../screens/offer';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  const local_tabBar = props => <TabBar {...props} />;

  return (
    <DrawerView>
      <Tab.Navigator
        tabBar={local_tabBar}
        screenOptions={{
          // headerShown: false,
          tabBarShowLabel: false,
          header: Navbar,
        }}>
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Deals" component={Deals} />
        <Tab.Screen name="Offers" component={Offer} />
        <Tab.Screen name="Flyers" component={Flyers} />
      </Tab.Navigator>
    </DrawerView>
  );
}
