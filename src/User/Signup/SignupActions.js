import * as actionTypes from '../UserActionTypes';

export const signupSuccess = (token) => {
  return {
    type: actionTypes.USER_SIGNUP_SUCCESS,
    token: token
  };
};

export const signupFailed = (errors) => {
  return {
    type: actionTypes.USER_SIGNUP_FAILED,
    errors: errors
  };
};

export const signup = ({username, email, password, resolve, reject}) => {
  return {
    type: actionTypes.USER_SIGNUP_INIT,
    username,
    email,
    password,
    resolve,
    reject
  }
}