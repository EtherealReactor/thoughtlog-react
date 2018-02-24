import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../ThoughtActionTypes';
import * as actions from './ShowThoughtActions';
import { push } from 'react-router-redux';
import axios from '../../AxiosGlobal';

function fetchThought(token, id) {
  axios.defaults.headers.common['Authorization'] = token;
  return axios.get(`/thought/${id}`)
}

function *fetchThoughtWorker(action) {
  let token = JSON.parse(localStorage.getItem('token'))
  try {
    let thought = yield call(fetchThought, token, action.id);
    yield put(actions.fetchThoughtSuccess(thought.data))
    yield put(push(`/thoughts/${action.id}`))  
  } catch (e) {
    yield put(actions.fetchThoughtFailed(e.response.data))
  }
}

function *fetchThoughtWatcher() {
  yield takeLatest(actionTypes.FETCH_THOUGHT_INIT, fetchThoughtWorker);
};

export default fetchThoughtWatcher;