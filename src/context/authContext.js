import React, {createContext, useEffect, useState} from 'react';
import {MMKV} from 'react-native-mmkv';
import configured_axios from '../config/index';

export const Auth = createContext(null);

export default function AuthContext({children}) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const storage = new MMKV();

  useEffect(() => {
    get_user();
  }, []);

  const get_user = () => {
    configured_axios
      .get('/user/current_user')
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
      .finally(() => setAuthLoading(false));
  };

  const login = (email, password) => {
    return new Promise(async (resolve,reject) => {
        try {
            const res = await configured_axios.post('/user/login', {email, password});
            storage.set('user_token', res.data.token);
            get_user();
            resolve(user)
          } catch (err) {
            console.log(err);
            reject(err)
          }
    })
  };

  return (
    <Auth.Provider value={{user, authLoading, get_user, login}}>{children}</Auth.Provider>
  );
}
