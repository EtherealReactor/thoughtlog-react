import * as actionTypes from '../UserActionTypes';

export const signinSuccess = (token) => {
  return {
    type: actionTypes.USER_SIGNIN_SUCCESS,
    token: token
  };
};

export const signinFailed = (errors) => {
  return {
    type: actionTypes.USER_SIGNIN_FAILED,
    errors: errors
  };
};

export const signin = (params) => {
  return {
    type: actionTypes.USER_SIGNIN_INIT,
    params
  }
}