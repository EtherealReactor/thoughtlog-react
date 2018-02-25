import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../ThoughtActionTypes';
import * as actions from './DeleteThoughtAction';
import axios from '../../AxiosGlobal';
import { notificationSuccess } from '../../Notifications/NotificationActions';


function deleteThought(token, id) {
  axios.defaults.headers.common['Authorization'] = token;
  return axios.delete(`/thought/${id}`)
}

function *delteThoughtWorker(action) {
  let token = JSON.parse(localStorage.getItem('token'));
  try {
     let res = yield call(deleteThought, token, action.id);
     yield put(actions.deleteThoughtSuccess(res.data._id))
     yield put(notificationSuccess('Your thought has been deleted Succesfully.'));
  } catch (e) {
    yield put(actions.deleteThoughtFailed(e.response.data))
  }
}

function *deleteThoughtWatcher() {
  console.log('saga registered delte');
  yield takeLatest(actionTypes.DELETE_THOUGHT_CONFIRM, delteThoughtWorker);
};

export default deleteThoughtWatcher;