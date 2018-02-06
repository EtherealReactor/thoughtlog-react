import * as actionTypes from './UserActionTypes';
import * as actions from './UserActions';


describe('User Signup ActionCreators', () => {
  it('should create an action for USER_SIGNUP_SUCCESS', () => {
    let token = 'some_token'
    let signupSuccessAction = { type: actionTypes.USER_SIGNUP_SUCCESS, token: token}
    expect(actions.signupSuccess(token)).toEqual(signupSuccessAction)
  });
  
  it('should create an action for USER_SIGNUP_INIT', () => {
    let signupInitAction = { type: actionTypes.USER_SIGNUP_INIT }
    expect(actions.signupInit()).toEqual(signupInitAction)
  });
  
  it('should create an action for USER_SIGNUP_FAILED', () => {
    let errors = [{username: 'Invalid'}]
    let signupFailAction = { type: actionTypes.USER_SIGNUP_FAILED, errors: errors }
    expect(actions.signupFailed(errors)).toEqual(signupFailAction)
  });
});