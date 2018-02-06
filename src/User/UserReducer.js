import * as actionTypes from './UserActionTypes';

let initialState = { token: '', errors: [] }

const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNUP_SUCCESS:
      return { ...state, token: action.token }
    case actionTypes.USER_SIGNUP_FAILED:
      return { ...state, errors: action.errors }
    default:
      return state;
  }
};

export default userReducer;