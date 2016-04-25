import * as types from '../constants/actionTypes';

const initialState = {
  data: {},
  loading: false,
};

export function user(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_USER:
      return Object.assign({}, state, {
        loading: true,
      });
    case types.RECEIVE_USER:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
      });
    default:
      return state;
  }
}
