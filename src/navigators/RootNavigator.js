import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import StackNavigation from './StackNavigation';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <DrawerNavigator /> */}
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
}
