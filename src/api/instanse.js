import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers:     {
      "API-KEY": "93b5342d-2271-4c27-ac60-ebcf95f8e9d2"
  }
});

export default instance;