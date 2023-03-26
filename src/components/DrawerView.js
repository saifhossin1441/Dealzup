import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

export default function DrawerView({children, style}) {
  const drawerProgress = useDrawerProgress();
  const viewStyles = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.93]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 15]);
    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  return (
    <Animated.View style={[styles.container, style, viewStyles]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 25,
    shadowColor: '#000',
    overflow: 'hidden',
  },
});
