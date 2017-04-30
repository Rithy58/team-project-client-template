import {sendXHR} from './xhr.js';

export function login(user, cb) {
  sendXHR('POST', '/api/auth/login', user, (xhr) => {
    if(xhr) {
      var token = JSON.parse(xhr.responseText).token;
      localStorage.setItem('token', token);
      var payload = token.split('.')[1];
      payload = window.atob(payload);
      var tokenObj = JSON.parse(payload);
      cb(tokenObj);
    } else {
      // something went wrong
      cb(null);
    }
  });
}

export function logout(cb) {
  localStorage.removeItem('token');
  cb();
}

export function isLogin(cb) {
  if(localStorage.getItem('token') !== null) {
    var token = localStorage.getItem('token');
    var payload = token.split('.')[1];
    payload = window.atob(payload);
    var tokenObj = JSON.parse(payload);
    cb(tokenObj);
  } else {
    cb(null);
  }
}

export function getToken() {
  return localStorage.getItem('token');
}
