import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { profileReducer } from './profileReducer';
import dialogReducer from './dialogReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage:
  dialogReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
//const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;