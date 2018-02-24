import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../ThoughtActionTypes';
import * as actions from './EditThoughtActions';
import axios from '../../AxiosGlobal';
import { push } from 'react-router-redux';

function editThought(token, id, params) {
  axios.defaults.headers.common['Authorization'] = token;
  return axios.put(`/thought/${id}`, params)
}

function *editThoughtWorker(action) {
  let token = JSON.parse(localStorage.getItem('token'));
  try {
     let res = yield call(editThought, token, action.id, action.params);
     yield put(actions.editThoughtSuccess(res.data))
     yield put(push('/thoughts'));
  } catch (e) {
    yield put(actions.editThoughtFailed(e.response.data))
  }
}

function *editThoughtWatcher() {
  yield takeLatest(actionTypes.EDIT_THOUGHT_INIT, editThoughtWorker);
};

export default editThoughtWatcher;