import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
}
