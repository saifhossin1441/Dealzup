import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  TouchableOpacity,
  Platform,
  Pressable,
} from 'react-native';
import TabNavigator from './TabNavigator';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import Refer from '../screens/refer';
import Navbar from '../components/navbar';
import Wallet from '../screens/wallet';
import Wishlist from '../screens/wishlist';
import About from '../screens/About';
import MerchantStack from './MerchantStack';

const Drawer = createDrawerNavigator();

const DrawerItem = ({label, onPress, activeItemColor, styles, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityRole="button"
      style={[styles.drawerItem, {backgroundColor: activeItemColor}]}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.drawerIcon} />
      </View>
      <Text style={[styles.label]}>{label}</Text>
    </TouchableOpacity>
  );
};

const DrawerItemList = ({state, descriptors, navigation, styles}) => {
  return (
    <View style={styles.view}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const drawerItem = options.item;
        const activeItemColor = isFocused ? '#fff' : null;

        return (
          <DrawerItem
            key={index}
            label={route.name}
            onPress={onPress}
            icon={drawerItem.icon}
            activeItemColor={activeItemColor}
            styles={styles}
          />
        );
      })}
    </View>
  );
};

const CustomDrawer = props => {
  const {state, descriptors, navigation} = props;
  const scrollRef = useRef(null);

  const [login, setLogin] = useState(false);

  const drawerProgress = useDrawerProgress();

  const viewStyles2 = type =>
    useAnimatedStyle(() => {
      const val = type === 'top' ? -100 : 100;
      const translateY = interpolate(drawerProgress.value, [0, 1], [val, 0]);
      const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1]);
      return {
        transform: [{translateY}],
        opacity,
      };
    });

  return (
    <View style={styles.container}>
      {/* header */}
      <Pressable
        style={styles.accounts}
        onPress={() => navigation.navigate(login ? 'Accounts' : 'Login')}>
        <Image
          source={
            login
              ? require('../assets/avatar.jpg')
              : require('../assets/logo.jpeg')
          }
          style={styles.avatar}
        />
        <Text style={styles.user_name}>
          {login ? 'Anas Alam' : 'Login/Register'}
        </Text>
        {login && <Text style={styles.viewProfile}>View Profile</Text>}
      </Pressable>
      {/* Drawer List Item */}
      <Animated.ScrollView
        ref={scrollRef}
        {...props}
        showsVerticalScrollIndicator={false}
        style={[styles.marginVertical, viewStyles2]}>
        <DrawerItemList {...props} styles={styles} />
        {/* 2nd menu */}
        {/* profile menu */}
      </Animated.ScrollView>
      {/* footer */}
      <Pressable
        style={{...styles.drawerItem, marginBottom: 20, paddingHorizontal: 10}}
        onPress={() => setLogin(!login)}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/logout.png')}
            style={styles.drawerIcon}
          />
        </View>
        <Text style={styles.label}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyles,
        drawerType: 'slide',
        overlayColor: 'transparent',
        swipeEdgeWidth: Platform.OS === 'android' && 40,
        sceneContainerStyle: styles.sceneStyles,
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          item: {
            icon: require('../assets/home-3d.png'),
          },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Go to Merchants"
        component={MerchantStack}
        options={{
          item: {
            icon: require('../assets/store.png'),
          },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Refer & Earn"
        component={Refer}
        options={{
          item: {
            icon: require('../assets/refer.png'),
          },
        }}
      />
      <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          item: {
            icon: require('../assets/wishlist.png'),
          },
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={Wallet}
        options={{
          item: {
            icon: require('../assets/wallet.png'),
          },
        }}
      />
      {/* <Drawer.Screen
        name="Flowchart"
        component={TabNavigator}
        options={{
          item: {
            icon: require('../assets/chart.png'),
          },
        }}
      /> */}
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          item: {
            icon: require('../assets/about.png'),
          },
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={TabNavigator}
        options={{
          item: {
            icon: require('../assets/contact.png'),
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerStyles: {
    flex: 1,
    width: '55%',
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
  },
  view: {
    borderRadius: 5,
    marginHorizontal: 0,
    paddingHorizontal: 10,
  },
  marginVertical: {
    marginVertical: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 7,
  },
  drawerIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 0,
    fontWeight: '500',
  },
  iconContainer: {
    padding: 7,
    borderRadius: 5,
    margin: 7,
    // backgroundColor: '#fff',
  },
  accounts: {
    height: 180,
    justifyContent: 'flex-end',
    padding: 20,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  user_name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },
  viewProfile: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  // separator: {
  //   width: '100%',
  //   height: 1,
  //   backgroundColor: colors.darkGray,
  //   marginVertical: constant.SPACING / 2,
  // },
  sceneStyles: {
    backgroundColor: '#eee',
  },
});
