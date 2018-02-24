// import { takeLatest, call, put } from 'redux-saga/effects';
// import * as actionTypes from './UserActionTypes';
// import * as actions from './UserActions';
// import axios from '../AxiosGlobal';
// import { SubmissionError } from 'redux-form';
// import { push } from 'react-router-redux';
// 
// let signin = (params) => {
//   return new Promise((resolve, reject) => {
//     axios.post('/users/signin', params)
//       .then(res => resolve(res.data.token))
//       .catch(err => reject(err.response.data))
//   });
// };
// 
// function *signinWorker({params: {email, password, resolve, reject}}) {
//   try {
//     let token = yield call(signin, {email, password})
//     yield put(actions.signinSuccess(token))
//     localStorage.setItem('token', JSON.stringify(token));
//     yield put(push('/thoughts'))
//   } catch (e) {
//     reject(new SubmissionError(e))
//     yield put(actions.signinFailed(e))
//   }
// };
// 
// function *signinWatcher() {
//   yield takeLatest(actionTypes.USER_SIGNIN_INIT, signinWorker);
// }
// 
// export default signinWatcher;