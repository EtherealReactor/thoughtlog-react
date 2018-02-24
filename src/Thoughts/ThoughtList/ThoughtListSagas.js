import { takeLatest, call, put } from 'redux-saga/effects';
import { THOUGHT_LIST_FETCH_INIT } from '../ThoughtActionTypes';
import * as actions from './ThoughtListActions';
import axios from '../../AxiosGlobal';


const fetchThoughts = (token, status) => {
  axios.defaults.headers.common['Authorization'] = token;
  return axios.get(`/thoughts/?status=${status}`)
}

function *listThoughtsWorker(action) {
  let token = JSON.parse(localStorage.getItem('token'));
  let status = action.status || 'published'

  try {
    let res = yield call(fetchThoughts, token, status)
    yield put(actions.thoughtListFetchSuccess(res.data))
  } catch (e) {
    yield put(actions.thoughtListFetchFailed(e.response.data))
  }
}

function *listThoughtsWatcher() {
  yield takeLatest(THOUGHT_LIST_FETCH_INIT, listThoughtsWorker)
}

export default listThoughtsWatcher;