import axios from '../../AxiosGlobal';
import { takeLatest, put, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import * as actions from './SignupActions';
import * as actionTypes from '../UserActionTypes';
import { push } from 'react-router-redux';


function signup(params) {
  return new Promise((resolve, reject) => {
    axios.post('/users/signup', params)
      .then((res) => (resolve(res.data.token)))
      .catch((err) => (reject(err.response.data)))
  });
}

function* signupWorker({username, email, password, resolve, reject}) {
  let params = {username, email, password}
   try {
     const token = yield call(signup, params)
     yield put(actions.signupSuccess(token));
     localStorage.setItem('token', JSON.stringify(token));
     yield put(push('/thoughts'));
   } catch (errors) {
     yield put(actions.signupFailed(errors));
     yield call(reject, new SubmissionError(errors))
     // reject(new SubmissionError(errors));
   }
}

function* signupWatcher () {
  yield takeLatest(actionTypes.USER_SIGNUP_INIT, signupWorker)
}

export default signupWatcher;