// import * as actionTypes from './UserActionTypes';
// 
// let initialState = { 
//   requesting: false,
//   success: false,
//   token: '',
//   messages: [],
//   errors: []
// }
// 
// const userReducer = (state=initialState, action) => {
//   switch (action.type) {
//     case actionTypes.USER_SIGNUP_INIT:
//       return {
//         ...state,
//         requesting: true,
//         messages: [{ body: 'Signup initiated..', time: new Date() }]
//       }
//     case actionTypes.USER_SIGNUP_SUCCESS:
//       return {
//          ...state,
//          token: action.token,
//          success: true,
//          requesting: false,
//          messages: [{body: 'Signup Success..', time: new Date()}],
//          errors: []
//       }
//     case actionTypes.USER_SIGNUP_FAILED:
//       return {
//          ...state,
//         requesting: false,
//         errors: action.errors,
//         messages: [{body: 'Signup Failed..', time: new Date()}]
//       }
//     case actionTypes.USER_SIGNIN_INIT:
//       return {
//         ...state,
//         requesting: true,
//         messages: [{ body: 'Signin initiated..', time: new Date() }]
//       }
//     case actionTypes.USER_SIGNIN_SUCCESS:
//       return {
//          ...state,
//          token: action.token,
//          success: true,
//          requesting: false,
//          messages: [{body: 'Signin Success..', time: new Date()}],
//          errors: []
//       }
//     case actionTypes.USER_SIGNIN_FAILED:
//       return {
//          ...state,
//         requesting: false,
//         errors: action.errors,
//         messages: [{body: 'Signin Failed..', time: new Date()}]
//       }
//     default:
//       return state;
//   }
// };
// 
// export default userReducer;