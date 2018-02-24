import * as actionTypes from '../UserActionTypes';

let initialState = { 
  requesting: false,
  success: false,
  token: '',
  messages: [],
  errors: []
}

const userSignupReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNUP_INIT:
      let message = { body: 'Signup initiated..', time: new Date() };
      let messages = [...state.messages, message];
      return {
        ...state,
        requesting: true,
        messages: messages
      }
    case actionTypes.USER_SIGNUP_SUCCESS:
      let signupSuccessMessage = {body: 'Signup Success..', time: new Date()};
      let signupSuccessMessages = [...state.messages, signupSuccessMessage];
      return {
         ...state,
         token: action.token,
         success: true,
         requesting: false,
         messages: signupSuccessMessages,
         errors: []
      }
    case actionTypes.USER_SIGNUP_FAILED:
      let signupFailMessage = {body: 'Signup Failed..', time: new Date()};
      let singupFailMessages = [...state.messages, signupFailMessage];
      return {
         ...state,
        requesting: false,
        errors: [...state.errors, action.errors],
        messages: singupFailMessages
      }
    default:
      return state;
  }
};

export default userSignupReducer;