import axios from 'axios';
import {API_URL} from "../tools/Url";

let http = null;

const createHttpInstance = (token = null, tokenType = 'Bearer') => {
  http = axios.create({
    baseURL: API_URL,
  });

  if (token) setHttpToken(token, tokenType);

  return http;
};

const setHttpToken = (token, tokenType = 'Bearer') => {
  http.defaults.headers.common['X-Access-Token'] = `${tokenType} ${token}`;
};

const authService = {
  serviceUrl: '/auth',
  login() {
    return http.post(`${this.serviceUrl}/login`);
  },
  registration(data) {
    return http.post(`${this.serviceUrl}/signup`, data);
  },
  logout() {
    return http.post(`${this.serviceUrl}/logout`);
  }
};

const userService = {
  userUrl: '/user',
  get() {
    return http.get(this.userUrl);
  },
  update(data) {
    return http.put(this.userUrl, data);
  }
};

export {
  createHttpInstance,
  setHttpToken,
  authService,
  userService,
};
