import reducer from './SignupReducer';
import * as actionTypes from '../UserActionTypes';

describe("Signup Reducer", () => {
  
  let initialState;
  beforeEach(() => {
    initialState = {requesting: false, success: false, token: '', messages: [], errors: []};
  });

  it("should initially have default state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })
  
  it("should update state on USER_SIGNUP_INIT", () => {
    let message = { body: 'Signup initiated..', time: new Date() };
    let expected = {...initialState, requesting: true, messages: [...initialState.messages, message]};
    expect(reducer(initialState, {type: actionTypes.USER_SIGNUP_INIT})).toEqual(expected);
  });
  
  it("should update state on USER_SIGNUP_SUCCESS", () => {
    let signupSuccessMessage = {body: 'Signup Success..', time: new Date()};
    let token = 'some_token'
    let expected = { ...initialState, requesting: false, success: true, token, messages: [...initialState.messages, signupSuccessMessage]};
    expect(reducer(initialState, {type: actionTypes.USER_SIGNUP_SUCCESS, token})).toEqual(expected);
  });
  
  it('should update state on USER_SIGNUP_FAILED', () => {
    let signupFailMessage = {body: 'Signup Failed..', time: new Date()};
    let errors = {email: 'email has to be unique'};
    let expected = {...initialState, requesting: false, success: false, messages: [...initialState.messages, signupFailMessage], errors: [...initialState.errors, errors]};
    expect(reducer(initialState, {type: actionTypes.USER_SIGNUP_FAILED, errors})).toEqual(expected);
  })
});