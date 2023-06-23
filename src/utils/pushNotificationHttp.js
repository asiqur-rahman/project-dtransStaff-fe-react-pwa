import config from '../config'
const host = config.applicationSettings.pushServerBaseUrl;

function post(path, body) {
  let data=JSON.stringify(body);
  if(body && body.username){
    data=JSON.parse(data);
    data.username=body.username;
    data=JSON.stringify(data);
  }
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: { "content-type": "application/json;charset=UTF-8", "sec-fetch-mode": "cors" },
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
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: { "content-type": "application/json;charset=UTF-8", "sec-fetch-mode": "cors" },
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
