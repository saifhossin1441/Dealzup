import axios from 'axios';
import {MMKV} from "react-native-mmkv"

const storage = new MMKV()

const configured_axios = axios.create({
    baseURL: "https://dealzup-server.onrender.com"
})

configured_axios.interceptors.request.use( config => {
    const token = storage.getString("user_token")
    console.log("token" , token)
    if(token){
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config
}, err=>{
    return Promise.reject(err)
})

export default configured_axios