import config from '../config'
import * as common from './common.utils'

const host = config.applicationSettings.pushServerBaseUrl;
const token = common.getToken();
function post(path, body) {
  let data=JSON.stringify(body);
  if(body && body.username){
    data=JSON.parse(data);
    data.username=body.username;
    data=JSON.stringify(data);
  }
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: { "content-type": "application/json;charset=UTF-8",
    "sec-fetch-mode": "cors",
    "Authorization": `Bearer ${token}`
   },
    body: data,
    method: "POST",
    mode: "cors"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

function get(path) {
  const token = common.getToken();
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: { "content-type": "application/json;charset=UTF-8",
     "sec-fetch-mode": "cors",
     "Authorization": `Bearer ${token}`
     },
    method: "GET",
    mode: "cors"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

const http = {
  post: post,
  get: get
};

export default http;
