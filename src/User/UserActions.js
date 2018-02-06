import * as actionTypes from './UserActionTypes';

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

export const signupInit = () => {
  return {
    type: actionTypes.USER_SIGNUP_INIT
  };
};

export const signup = (data) => {
  console.log('coming');
} 