import { combineReducers } from 'redux';

import * as login from './login';

const reducers = Object.assign({}, login);
export default combineReducers(reducers);
