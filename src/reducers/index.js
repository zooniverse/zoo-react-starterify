import { combineReducers } from 'redux';

// import * as login from './login';
import * as user from './user';

const reducers = Object.assign({}, user);
export default combineReducers(reducers);
