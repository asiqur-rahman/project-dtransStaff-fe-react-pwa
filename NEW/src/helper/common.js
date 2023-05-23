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
        // const SessionTime=new Date(session['sessionTime']).toLocaleTimeString();
        // const LocalTime=new Date().toLocaleTimeString()
         //const rrr=SessionTime>LocalTime;
         //alert(SessionTime + ' - '+ LocalTime + ' - '+ rrr);
         //return session.token;
        // if(SessionTime>LocalTime){
            // return refreshToken?session.refreshToken:session.jwtToken;
            return session.jwtToken;
        // }
        // else{
        //     removeSession();
        //     return null;
        // }
    }
    else{
        removeSession();
        return null;
    }
}

export const setSession= async (sessionData) => {
    // var sessionValidate = new Date();
    // sessionValidate.setTime(new Date().getTime() + (sessionData.sessionTime*1000));
    // sessionData.sessionTime = sessionValidate;
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