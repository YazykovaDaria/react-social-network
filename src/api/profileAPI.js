import instance from "./instanse"



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