import * as axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers:     {
      "API-KEY": "93b5342d-2271-4c27-ac60-ebcf95f8e9d2"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pagesSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
    .then((response) => response.data)
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
    .then((response) => response.data)
  },

  getUserStatus(userId) {
return instance.get(`profile/status/${userId}`)
.then((response) => response.data)
  },

updateUserStatus(userStatus) {
return instance.put(`profile/status`, {status: userStatus})
.then((response) => response.data)
}
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
    .then((response) => response.data)
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
    .then((response) => response.data)
  },

  logout() {
    return instance.delete(`auth/login`)
    .then((response) => response.data)
  }
}