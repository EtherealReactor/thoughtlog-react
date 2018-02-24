import * as actionTypes from '../ThoughtActionTypes';

let initialState = { thoughtsList: [], errors: [], messages: [], total_pages: '', current_page: '', loading: true }

const thoughtListReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.THOUGHT_LIST_FETCH_SUCCESS:
      let message = { body: 'THOUGHT_LIST_FETCH_SUCCESS', time: new Date()}
      return {
        thoughtsList: [...action.thoughts],
        messages: [...state.messages, message],
        total_pages: action.total_pages,
        current_page: action.current_page,
        loading: false
      }
    case actionTypes.THOUGHT_LIST_FETCH_FAILED:
      let errorMsg = { body: 'THOUGHT_LIST_FETCH_FAILED', time: new Date()}
      return {
        thoughtsList: [],
        messages: [...state.messages, errorMsg],
        errors: [...state.errors, action.errors],
        loading: false
      }
    case actionTypes.THOUGHT_LIST_FETCH_INIT:
      let intiMessage = { body: 'THOUGHT_LIST_FETCH_INIT', time: new Date() }
      return {
        ...state,
        loading: true,
        messages: [...state.messages, intiMessage]
      }
    default:
      return state;
  }
}

export default thoughtListReducer;