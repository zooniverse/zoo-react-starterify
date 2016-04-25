import { combineReducers } from 'redux';

import * as login from './login';
import * as user from './user';

const reducers = Object.assign({}, login, user);
export default combineReducers(reducers);
