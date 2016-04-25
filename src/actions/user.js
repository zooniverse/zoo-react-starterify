import { browserHistory } from 'react-router';
import { auth, apiClient, oauth } from 'panoptes-client';
import * as types from '../constants/actionTypes';
import config from '../constants/config';

export function fetchUserDetails(userId) {
  return dispatch => {
    dispatch({
      type: types.REQUEST_USER,
    });
    return auth.checkCurrent()
    .then(response => dispatch({
        type: types.RECEIVE_USER,
        data: response.data,
      }))
    .catch(response => console.log('RESPONSE-error: ', response))
  }
}
