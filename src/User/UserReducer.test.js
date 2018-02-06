import * as actionTypes from './UserActionTypes';
import reducer from './UserReducer';

describe('UserReducer Related Tests', () => {
  it('should render empty state', () => {
    let initialState = { token: '', errors: [] }
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  
  it('should append token to state on USER_SIGNUP_SUCCESS', () => {
    let token = 'some_token'
    let initialState = { token: '', errors: [] }
    let finalState = {token: token, errors: []}
    expect(reducer(initialState, { type: actionTypes.USER_SIGNUP_SUCCESS, token: token})).toEqual(finalState);
  });
  
  it('should append errors to state on USER_SIGNUP_FAILED', () => {
    let errors = [{password: 'invalid'}]
    let initialState = { token: '', errors: [] }
    let finalState = {token: '', errors: errors}
    expect(reducer(initialState, { type: actionTypes.USER_SIGNUP_FAILED, errors: errors})).toEqual(finalState);
  });
});