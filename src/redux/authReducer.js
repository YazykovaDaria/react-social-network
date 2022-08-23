import { authAPI } from "../api/auth-api";

const  SET_USER_DATE = 'SET-USER-DATE';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATE:
      return {...state, 
        ...action.payload
      }
default:
  return state;
  }
}

export default authReducer;

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATE, payload: {id, email, login, isAuth}
})

export const getAuthUser = () => {
  return (dispatch) => {
    return authAPI.me()
    .then((data) => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
  }
}

export const login = (email, password, rememberMe, setStatus, setSubmitting) => (dispatch) => {
authAPI.login(email, password, rememberMe)
.then((data) => {
  if (data.resultCode === 0) {
    dispatch(getAuthUser())
  } else { setStatus(data.messages) };
  setSubmitting(false);
})
}

export const logout = () => (dispatch) => {
  authAPI.logout()
  .then((data) => {
if (data.resultCode === 0) {
  dispatch(setAuthUserData(null, null, null, false))
}
  })
}