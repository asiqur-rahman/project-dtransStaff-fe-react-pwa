import CryptoJS from "crypto-js";
import Config from '../config';

export const baseUrl = () => {
    const baseUrl = Config.MODE=="production" ? Config.applicationSettings.productionBaseURL : Config.applicationSettings.developmentBaseURL;
    return baseUrl;
}

export const getUser = () => {
    const user = localStorage.getItem(Config.applicationSettings.SESSION_NAME);
    if(user){
        const data=decrypt(user);
        // // console.log(data)
        var parsedData=JSON.parse(data);
        // parsedData.ermissions=getPermissions();
        return parsedData;
    }
    else{
        removeSession();
        return null;
    }
}


export const isUserLogedIn = () => {
    const user = localStorage.getItem(Config.applicationSettings.SESSION_NAME);
    if(user){
        const data=decrypt(user);
        if(data){
            const session=JSON.parse(data);
            if(session.jwtToken){
                return true;
            }
            else{
                removeSession();
                return false;
            }
        }
    }
    else{
        removeSession();
        return false;
    }
}

export const getToken= (refreshToken=false) => {
    const user = localStorage.getItem(Config.applicationSettings.SESSION_NAME);
    if(user){
        const data=decrypt(localStorage.getItem(Config.applicationSettings.SESSION_NAME));
        const session=JSON.parse(data);
            return session.jwtToken;
    }
    else{
        removeSession();
        return null;
    }
}

export const setSession= async (sessionData) => {
    if(!sessionData.items)sessionData.items={};
    var session = JSON.stringify(sessionData);
    localStorage.setItem(Config.applicationSettings.SESSION_NAME,encrypt(session));
    return true;
}

export const removeSession= async (name) => {
    localStorage.removeItem(name??Config.applicationSettings.SESSION_NAME);
}

export const encrypt= (data) => {
    try {
        if(data){
            return  CryptoJS.DES.encrypt(data, CryptoJS.enc.Utf8.parse('@Shik-SE'),{ iv: { words: [ 0, 0, 0, 0 ], sigBytes: 16 } }).toString();
        }
        else{
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const decrypt= (data) => {
    try {
        if(data){
            const bytes= CryptoJS.DES.decrypt(data, CryptoJS.enc.Utf8.parse('@Shik-SE'),{ iv: { words: [ 0, 0, 0, 0 ], sigBytes: 16 } });
            return bytes.toString(CryptoJS.enc.Utf8);
        }
        else{
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const downloadFile = (url, fileName) => {
    let link = document.createElement('a');
    link.href = url;
    link.download = fileName;
  
    // Check if the file is an image
    if (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif')) {
      // If it's an image, open it in a new window
      window.open(url, '_blank');
    } else {
      // If it's not an image, download it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }