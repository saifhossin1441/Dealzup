import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBar from '../components/TabBar';
import Deals from '../screens/deals';
import Explore from '../screens/Explore';
import Flyers from '../screens/flyers';
import Offer from '../screens/offer';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  const local_tabBar = props => <TabBar {...props} />;

  return (
    <Tab.Navigator
      tabBar={local_tabBar}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Deals" component={Deals} />
      <Tab.Screen name="Offers" component={Offer} />
      <Tab.Screen name="Flyers" component={Flyers} />
    </Tab.Navigator>
  );
}
