import { browserHistory } from 'react-router';
import { auth, apiClient, oauth } from 'panoptes-client';
import * as types from '../constants/actionTypes';
import config from '../constants/config';

export function checkLoginUser() {  //First thing on app load - check if the user is logged in.
  return (dispatch) => {
    auth.checkCurrent()
      .then((user) => {
        dispatch(setLoginUser(user));
      });
  }
}

export function setLoginUser(user) {
  return (dispatch) => {
    dispatch({
      type: types.SET_LOGIN_USER,
      user
    });
  };
}

export function loginToPanoptes() {  //Returns a login page URL for the user to navigate to.
  return (dispatch) => {
    return oauth.signIn(window.location.host)
  }
}

export function logoutFromPanoptes() {
  return (dispatch) => {
    oauth.signOut()
      .then(user => {
        dispatch(setLoginUser(user));
      });
  }
}
