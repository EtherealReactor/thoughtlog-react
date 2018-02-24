import * as actionTypes from '../ThoughtActionTypes';

let initialState = { fetchedThought: {}, errors: [], messages: [], success: false, loading: true }

const ShowThoughtReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_THOUGHT_INIT:
      let initMessage = { message: 'FETCH_THOUGHT_INIT', time: new Date() }
      return {
        ...state,
        messages: [...state.messages, initMessage]
      }
    case actionTypes.FETCH_THOUGHT_SUCCESS:
      let successMessage = { message: 'FETCH_THOUGHT_SUCCESS', time: new Date() }
      return {
        ...state,
        messages: [...state.messages, successMessage],
        fetchedThought: {...state.fetchedThought, ...action.data },
        success: true,
        loading: false
      }
    case actionTypes.FETCH_THOUGHT_FAILED:
      let failMessage = { message: 'FETCH_THOUGHT_FAILED', time: new Date() }
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