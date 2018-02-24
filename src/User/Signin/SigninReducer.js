import * as actionTypes from '../UserActionTypes';

let initialState = { 
  requesting: false,
  success: false,
  token: '',
  messages: [],
  errors: []
}

const userSigninReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNIN_INIT:
      let message = [{ body: 'Signin initiated..', time: new Date() }]
      let messages = [...state.messages, message]
      return {
        ...state,
        requesting: true,
        messages: messages
      }
    case actionTypes.USER_SIGNIN_SUCCESS:
      let successMessage = { body: 'Signin success..', time: new Date() }
      let successMessages = [...state.messages, successMessage]
      return {
         ...state,
         token: action.token,
         success: true,
         requesting: false,
         messages: successMessages,
         errors: []
      }
    case actionTypes.USER_SIGNIN_FAILED:
      let failMessage = { body: 'Signin failed..', time: new Date() }
      let failMessages = [...state.messages, failMessage]
      return {
         ...state,
        requesting: false,
        errors: [...state.errors, action.errors],
        success: false,
        messages: failMessages
      }
    default:
      return state;
  }
};

export default userSigninReducer;