
import axios from 'axios';
import {getToken} from './common';
import Config from '../config';
import * as Common from './common';

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
        auth_helper.removeSession();
        window.location='/login';
    }
    else{
        return new Promise((resolve,reject)=>{
            reject(error)
        });
    }
})

export default instance;

let web = axios.create({
  baseURL: Common.baseUrl(),
})


// request header
web.interceptors.request.use((config) => {
  config.headers = { 'Authorization': 'Bearer ' +  Config.applicationSettings.BASE_TOKEN}
  return config;
}, error => {
  return Promise.reject(error);
})

// response parse
web.interceptors.response.use(
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
        auth_helper.removeSession();
        window.location='/login';
    }
    else{
        return new Promise((resolve,reject)=>{
            reject(error)
        });
    }
})

export {web};