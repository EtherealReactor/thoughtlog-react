import * as actionTypes from './ThoughtActionTypes';

let initialState = { 
  thoughts: [],
  errors: [],
  messages: [],
  success: false,
  loading: true,
  current_page: '',
  total_pages: '',
  current_thought_id: '',
  show_confirm: false
}

const thoughtsReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.THOUGHT_LIST_FETCH_INIT:
    case actionTypes.NEW_THOUGHT_INIT:
    case actionTypes.EDIT_THOUGHT_INIT:
      let initMessage = { message: action.type, time: new Date() }
      return {
        ...state,
        messages: [...state.messages, initMessage]
      }
    case actionTypes.DELETE_THOUGHT_INIT:
      let initDeleteMessage = { message: action.type, time: new Date() }
      return {
        ...state,
        messages: [...state.messages, initDeleteMessage],
        show_confirm: true,
        current_thought_id: action.id
      }
    case actionTypes.DELETE_THOUGHT_CANCEL:
      let deleteCancelMessage = { message: action.type, time: new Date() }
      return {
        ...state,
        messages: [...state.messages, deleteCancelMessage],
        show_confirm: false,
        current_thought_id: ''
      }
    case actionTypes.NEW_THOUGHT_FAILED:
    case actionTypes.THOUGHT_LIST_FETCH_FAILED:
    case actionTypes.EDIT_THOUGHT_FAILED:
    case actionTypes.DELETE_THOUGHT_FAILED:
      let failMessage = { message: action.type, time: new Date() }
      console.log('thoughts fetch errors', action.errors);
      return {
        ...state,
        errors: state.errors.concat(action.errors),
        messages: [...state.messages, failMessage],
        success: false,
        loading: false
      }
    case actionTypes.THOUGHT_LIST_FETCH_SUCCESS:
      let successMessage = { message: action.type, time: new Date() }
      return {
        ...state,
        messages: [...state.messages, successMessage],
        thoughts: [...action.thoughts],
        success: true,
        loading: false,
        current_page: action.current_page,
        total_pages: action.total_pages
      }
    case actionTypes.NEW_THOUGHT_SUCCESS:
      let newSuccessMessage = { message: action.type, time: new Date() }
        return {
          ...state,
          messages: [...state.messages, newSuccessMessage],
          thoughts: state.thoughts.concat(action.thought),
          success: true,
          loading: false,
        }
    case actionTypes.EDIT_THOUGHT_SUCCESS:
      let editSuccessMessage = { message: action.type, time: new Date() }
      let thoughts =  state.thoughts.map((thought) => {
                        if(thought._id !== action.thought._id) { return thought; }
                        return { ...thought, ...action.thought };    
                      });   
      return {
        ...state,
        messages: [...state.messages, editSuccessMessage],
        thoughts: thoughts,
        success: true,
        loading: true,
      }
    case actionTypes.DELETE_THOUGHT_SUCCESS:
      let deleteSuccessMessage = { message: action.type, time: new Date() }
      let updatedThoughts = state.thoughts.filter((thought) => {
                              if(thought._id !== action.id) { 
                                return thought;
                              }
                              return null
                            });   
      return {
        ...state,
        messages: [...state.messages, deleteSuccessMessage],
        thoughts: updatedThoughts,
        success: true,
        loading: false,
        show_confirm: false,
        current_thought_id: ''
      }
    default:
      return state;
  }
}

export default thoughtsReducer;