import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import Categories from './src/screens/categories';
import {SplashScreen} from './src/screens/splashScreen';

function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 1000);
  }, []);

  return (
    <SplashScreen isAppReady={appReady}>
      <RootNavigator />
    </SplashScreen>
  );
}

export default App;
