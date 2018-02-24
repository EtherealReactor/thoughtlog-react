// import * as actionTypes from '../ThoughtActionTypes';
// 
// let initialState = { id: '', errors: [], requesting: false, success: false, messages: [] };
// 
// function newThoughtReducer(state=initialState, action) {
//   switch (action.type) {
//     case actionTypes.NEW_THOUGHT_INIT:
//       let message = [{ body: 'NewThought requested..', time: new Date() }]
//       let messages = [...state.messages, message]
//       return {
//         ...state,
//         requesting: true,
//         messages
//       }
//     case actionTypes.NEW_THOUGHT_SUCCESS:
//       let successMessage = [{ body: 'NewThought success..', time: new Date() }]
//       let successMessages = [...state.messages, successMessage]
//         return {
//           ...state,
//           success: true,
//           id: action.id,
//           requesting: false,
//           messages: successMessages
//         }
//     case actionTypes.NEW_THOUGHT_FAILED:
//       let failMessage = [{ body: 'NewThought failed..', time: new Date() }]
//       let failMessages = [...state.messages, failMessage]
//       return {
//         ...state,
//         success: false,
//         id: '',
//         requesting: false,
//         messages: failMessages
//       }
//     default:
//       return state;
//   }
// }
// 
// export default newThoughtReducer;