import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_MORE_INIT } from '../ThoughtActionTypes';
import * as actions from './LoadMoreThoughtsAction';
import axios from '../../AxiosGlobal';


const fetchThoughts = (token, status, page) => {
  axios.defaults.headers.common['Authorization'] = token;
  return axios.get(`/thoughts/?status=${status}&page=${page}`)
}

function *loadMoreWorker(action) {
  let token = JSON.parse(localStorage.getItem('token'));
  let status = action.status || 'published'
  let page = action.page || 1;

  try {
    let res = yield call(fetchThoughts, token, status, page)
    let { current_page, total_pages } = res.data
    yield put(actions.loadMoreSuccess(res.data.thoughts, current_page, total_pages))
  } catch (e) {
    yield put(actions.loadMoreFailed(e.response.data))
  }
}

function *loadMoreWatcher() {
  yield takeLatest(LOAD_MORE_INIT, loadMoreWorker)
}

export default loadMoreWatcher;