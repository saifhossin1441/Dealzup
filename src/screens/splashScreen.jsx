import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  Animated,
} from 'react-native';
import {transformer} from '../../metro.config';
// import {MMKV} from 'react-native-mmkv';

export const SplashScreen = ({isAppReady, children}) => {
  return (
    <>
      {isAppReady && children}

      <Splash isAppReady={isAppReady} />
    </>
  );
};

const LOADING_IMAGE = 'Loading image';
const FADE_IN_IMAGE = 'Fade in image';
const WAIT_FOR_APP_TO_BE_READY = 'Wait for app to be ready';
const FADE_OUT = 'Fade out';
const HIDDEN = 'Hidden';

export default function Splash({isAppReady}) {
  const [state, setState] = useState(LOADING_IMAGE);

  //   const storage = new MMKV();
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const imageTransform = useRef(new Animated.Value(-300)).current;
  const imageJump = useRef(new Animated.Value(0)).current;
  const TextFall = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    if (state === FADE_IN_IMAGE) {
      Animated.timing(imageTransform, {
        toValue: 0,
        duration: 400, // Fade in duration
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(imageJump, {
          toValue: -30,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(imageJump, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
          }).start(() => {
            Animated.timing(TextFall, {
              toValue: -10,
              duration: 100,
              useNativeDriver: true,
            }).start(() => {
              setState(WAIT_FOR_APP_TO_BE_READY);
            });
          });
        });
      });
    }
  }, [imageTransform, imageJump, TextFall, state]);

  useEffect(() => {
    if (state === WAIT_FOR_APP_TO_BE_READY) {
      if (isAppReady) {
        setState(FADE_OUT);
      }
    }
  }, [isAppReady, state]);

  useEffect(() => {
    if (state === FADE_OUT) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 1000, // Fade out duration
        delay: 500, // Minimum time the logo will stay visible
        useNativeDriver: true,
      }).start(() => {
        setState(HIDDEN);
      });
    }
  }, [containerOpacity, state]);

  if (state === HIDDEN) return null;

  return (
    <Animated.View
      collapsable={false}
      style={[styles.container, {opacity: containerOpacity}]}>
      <View
        style={{
          height: 180,
          width: '100%',
          backgroundColor: '#fafafa',
          //   backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          zIndex: 5,
        }}>
        <Animated.Image
          source={require('../assets/logo.jpeg')}
          resizeMode="cover"
          fadeDuration={0}
          onLoad={() => {
            setState(FADE_IN_IMAGE);
          }}
          style={[
            styles.logo,
            {
              transform: [
                {translateX: imageTransform},
                {translateY: imageJump},
              ],
            },
          ]}
        />
      </View>
      <Animated.Text
        style={[styles.name, {transform: [{translateY: TextFall}]}]}>
        DEALZUP
      </Animated.Text>
      {/* <Pressable
          style={{
            flex: 0.15,
          }}
          onPress={() =>
            navigation.navigate(storage.contains('user') ? 'questions' : 'login')
          }>
          <LinearGradient
            colors={['#ff552d', '#f19717']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button}>
            <Text style={styles.buttonText}>
              {storage.contains('user') ? 'Continue Quiz' : 'Start Quiz'}
            </Text>
          </LinearGradient>
        </Pressable> */}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    position: 'absolute',
    top: 0,
    zIndex: 9999,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
  logo: {
    height: 170,
    width: 170,
    resizeMode: 'contain',
    // width: '100%',
    // height: '100%',
    borderWidth: 3,
    // borderColor: '#e9e9e9',
    borderRadius: 9999,
    // transform: [{translateX: -999}],
    // marginBottom: 20,
  },
  name: {
    fontSize: 40,
    fontFamily: 'Signika-Bold',
    // marginBottom: 'auto',
    // marginTop: 'auto',
    // color: '#333',
    textAlign: 'center',
    letterSpacing: 2,
    color: '#06d7a0',
    // backgroundColor: 'red',
    width: '100%',
  },
});
