import { profileAPI } from "../api/auth-api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const UPDATE_USER_STATUS = 'UPDATE-USER-STATUS';

const initialState = {
  posts: [
{post: 'hello', id: 1, like: 11},
{post: 'yo', id: 2, like: 21},
{post: 'it camasutra', id: 3, like: 1},
  ],
  newPostText: 'samurai!!',
  profile: null,
  userStatus: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPostAdd = {
        post: state.newPostText,
        id: 5,
        like: 0
      }
      //глубоко копируем только то, что будем изменять, весь стейт копировать избыточно!
return {
  ...state,
  posts: [...state.posts, newPostAdd],
  newPostText: ''
};
case UPDATE_POST:
  return {
    ...state,
    newPostText: action.newPost
  };
  case SET_USER_STATUS:
    return {
      ...state,
      userStatus: action.userStatus
    };
  case SET_USER_PROFILE:
    return {...state, profile: action.profile}
default:
  return state;
  }
}

export const createPostAction = () => ({type: ADD_POST})
export const createUpdatePostAction = (newPost) => (
  {type: UPDATE_POST, newPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setUserStatus = (userStatus) => ({
  type: SET_USER_STATUS, userStatus
})


export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
    .then((data) => {
      dispatch(setUserProfile(data))
    })
  }
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId)
    .then((status) => {
      dispatch(setUserStatus(status))
    })
  }
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    })
  }
}



