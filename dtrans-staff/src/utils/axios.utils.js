
import axios from 'axios';
import {getToken} from './common.utils';
import Config from '../config';
import { toast } from 'react-toastify';
import * as Common from './common.utils';

let instance = axios.create({
  baseURL: Common.baseUrl(),
})

// request header
instance.interceptors.request.use((config) => {
  const token = getToken();
  if(token){
    config.headers = { 'Authorization': 'Bearer ' +  token}
  }
  return config;
}, error => {
  return Promise.reject(error);
})

// response parse
instance.interceptors.response.use(
    (response) => {
        return response
    }, 
    (error) => {
    console.warn('Error status ::', error.response?.status)
    console.log(error.response?.status);
    if(!error.response){
        return new Promise((resolve,reject)=>{
            reject(error)
        });
    }
    else if(error.response.status===401){
        toast.error("Unauthorized Credentials");
        Common.removeSession();
    }
    else{
        return new Promise((resolve,reject)=>{
            reject(error)
        });
    }
})

export default instance;