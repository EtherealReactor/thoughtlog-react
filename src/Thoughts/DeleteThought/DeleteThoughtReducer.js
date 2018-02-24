import * as actionTypes from '../ThoughtActionTypes';

let initialState = { thought: '', messages: [] }

const ShowThoughtReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_THOUGHT_INIT:
      let initMessage = { message: 'DELETE_THOUGHT_INIT', time: new Date() }
      return {
        ...state,
        messages: [...state.messages, initMessage]
      }
    case actionTypes.DELETE_THOUGHT_SUCCESS:
      let successMessage = { message: 'DELETE_THOUGHT_SUCCESS', time: new Date() }
      return {
        ...state,
        messages: [...state.messages, successMessage],
      }
    case actionTypes.DELETE_THOUGHT_FAILED:
      let failMessage = { message: 'DELETE_THOUGHT_FAILED', time: new Date() }
      return {
        ...state,
        errors: [...state.errors, ...action.errors],
        messages: [...state.messages, failMessage],
      }
    default:
      return state;
  }
}

export default ShowThoughtReducer;