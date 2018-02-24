import * as actionTypes from '../UserActionTypes';
import * as actions from './SignupActions';

describe("SignupActions", () => {
  it('must respond to signup action', () => {
    let resolve = jest.fn();
    let reject = jest.fn();
    let params = {username: 'ram', email: 'ram@gmail.com', password: 'hashed_pwd', resolve, reject}
    let expected = { type: actionTypes.USER_SIGNUP_INIT, username: 'ram', email: 'ram@gmail.com', password: 'hashed_pwd', resolve, reject }
    expect(actions.signup(params)).toEqual(expected);
  });
  
  it('must work for USER_SIGNUP_SUCCESS', () => {
    let token = 'some_token';
    let expected = {type: actionTypes.USER_SIGNUP_SUCCESS, token};
    expect(actions.signupSuccess(token)).toEqual(expected);
  });
  
  it('must work for USER_SIGNUP_FAILED', () => {
    let errors = {email: 'has to be unique'};
    let expected = {type: actionTypes.USER_SIGNUP_FAILED, errors};
    expect(actions.signupFailed(errors)).toEqual(expected);
  });
  
});