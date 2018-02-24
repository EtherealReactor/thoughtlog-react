import * as actionTypes from '../UserActionTypes';
import * as actions from './SigninActions';


describe('User Signup ActionCreators', () => {
  it('should create an action for USER_SIGNIN_SUCCESS', () => {
    let token = 'some_token'
    let signinSuccess = { type: actionTypes.USER_SIGNIN_SUCCESS, token: token}
    expect(actions.signinSuccess(token)).toEqual(signinSuccess)
  });

  it('should create an action for USER_SIGNUP_INIT', () => {
    let params = { email: 'some_email', password: 'hashed_pwd'}
    let signin = { type: actionTypes.USER_SIGNIN_INIT,  params}
    expect(actions.signin(params)).toEqual(signin)
  });

  it('should create an action for USER_SIGNIN_FAILED', () => {
    let errors = {email: 'User with email is not found'}
    let signinFailed = { type: actionTypes.USER_SIGNIN_FAILED, errors: errors }
    expect(actions.signinFailed(errors)).toEqual(signinFailed)
  });
});