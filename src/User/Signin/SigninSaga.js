import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../UserActionTypes';
import * as actions from './SigninActions';
import axios from '../../AxiosGlobal';
import { SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';
import { notificationSuccess } from '../../Notifications/NotificationActions';


export function signin(params) {
  return axios.post('/users/signin', params)
}

export function *signinWorker({params: {email, password, resolve, reject, referer}}) {
  try {
    let location = referer || '/thoughts';
    let res = yield call(signin, {email, password})
    yield put(actions.signinSuccess(res.data.token))
    localStorage.setItem('token', JSON.stringify(res.data.token));
    yield put(notificationSuccess('Signin Succesful !!'));
    yield put(push(location))
  } catch (error) {
    let errMsg = error.response.data;
    yield put(actions.signinFailed(errMsg));
    yield call(reject, new SubmissionError(errMsg))
  }
};

function *signinWatcher() {
  yield takeLatest(actionTypes.USER_SIGNIN_INIT, signinWorker);
}

export default signinWatcher;