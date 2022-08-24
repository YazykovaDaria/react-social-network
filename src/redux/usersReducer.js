import { usersAPI } from "../api/usersAPI";

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const  SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

const initialState = {
  users: [],
  usersCount: 0,
  pagesSize: 10,
  currentPage: 1,
  isFetching: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
const newState = state.users.map((user) => {
  if (action.userId === user.id) {
    const followStatus = user.followed ? false : true;
    return { ...user, followed: followStatus}
  }
  return user;
})
return {users: newState};
case SET_USERS:
  return {...state,
users: [...action.users], 
usersCount: action.usersCount,
};
case SET_CURRENT_PAGE:
  return {...state, currentPage: action.currentPage}
case TOGGLE_IS_FETCHING:
  return {...state, isFetching: action.isFetching}

default: 
return state;
  }
}

export default usersReducer;

export const toggleFollow = (id) => ({type: TOGGLE_FOLLOW,
userId: id})

export const setUsers = (users, usersCount) => ({ type: SET_USERS, users, usersCount});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})

export const toggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getUsers = (currentPage, pagesSize) => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    usersAPI.getUsers(currentPage, pagesSize)
    .then((data) => {
      dispatch(toggleFetching(false));
      dispatch(setUsers(data.items, data.totalCount))
    })
  }
}

