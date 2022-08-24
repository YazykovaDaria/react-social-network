import instance from "./instanse"

export const usersAPI = {
  getUsers(currentPage = 1, pagesSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
    .then((response) => response.data)
  },
}