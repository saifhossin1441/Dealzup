import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBar from '../components/TabBar';
import Explore from '../screens/Explore';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={TabBar}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
}
