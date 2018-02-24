import * as actionTypes from '../ThoughtActionTypes';

let initialState = { thought: {}, errors: [], messages: [], success: false, loading: true }

const ShowThoughtReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_THOUGHT_INIT:
      let initMessage = { message: 'EDIT_THOUGHT_INIT', time: new Date() }
      return {
        ...state,
        messages: [...state.messages, initMessage]
      }
    case actionTypes.EDIT_THOUGHT_SUCCESS:
      let successMessage = { message: 'EDIT_THOUGHT_SUCCESS', time: new Date() }
      return {
        ...state,
        messages: [...state.messages, successMessage],
        thought: {...state.thought, ...action.thought },
        success: true,
        loading: false
      }
    case actionTypes.EDIT_THOUGHT_FAILED:
      let failMessage = { message: 'EDIT_THOUGHT_FAILED', time: new Date() }
      return {
        ...state,
        errors: [...state.errors, ...action.errors],
        success: false,
        messages: [...state.messages, failMessage],
        loading: false
      }
    default:
      return state;
  }
}

export default ShowThoughtReducer;