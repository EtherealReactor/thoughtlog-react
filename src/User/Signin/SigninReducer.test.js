import * as actionTypes from '../UserActionTypes';
import reducer from './SigninReducer';

describe('UserReducer Related Tests', () => {

  let initialState;
  beforeEach(() => {
    initialState = { requesting: false, success: false, token: '', messages: [], errors: [] }
  })

  it('should render empty state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('state should be updated on USER_SIGNIN_SUCCESS', () => {
    let token = 'some_token'
    let finalState = {token: token, errors: [], requesting: false, success: true, messages: [{body: 'Signin success..', time: new Date()}]}
    expect(reducer(initialState, { type: actionTypes.USER_SIGNIN_SUCCESS, token: token})).toEqual(finalState);
  });

  it('should append errors to state on USER_SIGNUP_FAILED', () => {
    let errors = {password: 'invalid'}
    let finalState = {token: '', errors: [errors], requesting: false, success: false, messages: [{body: 'Signin failed..', time: new Date()}]}
    let state = reducer(initialState, { type: actionTypes.USER_SIGNIN_FAILED, errors: errors});
    expect(state).toEqual(finalState);
  });
});