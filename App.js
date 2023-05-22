import 'react-native-gesture-handler';
import React, {useContext, useEffect, useState} from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import Categories from './src/screens/categories';
import {SplashScreen} from './src/screens/splashScreen';
import { Auth } from './src/context/authContext';

function App() {
  const [appReady, setAppReady] = useState(false);
  const {authLoading} = useContext(Auth);

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 1000);
  }, []);

  return (
    <SplashScreen isAppReady={!authLoading}>
      <RootNavigator />
    </SplashScreen>
  );
}

export default App;
