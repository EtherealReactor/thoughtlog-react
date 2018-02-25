import { takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../AxiosGlobal';
import { push } from 'react-router-redux';
import * as actionTypes from '../ThoughtActionTypes';
import * as actions from '../NewThought/NewThoughtActions';

const createThought = (token, params) => {
  axios.defaults.headers.common['Authorization'] = token;

  return new Promise((resolve, reject) => {
    axios.post('/thoughts', params)
      .then( (res) => (resolve(res.data)) )
      .catch( (err) => (reject(err.response.data)) );
  })
}

function *newThoughtWorker(action) {
  let token = JSON.parse(localStorage.getItem('token'));
  try {
    let thought = yield call(createThought, token, action.params)
    yield put(actions.newThoughtSuccess(thought))
    yield put(push('/thoughts'))
  } catch (e) {
    yield put(actions.newThoughtFailed(e))
  }
}


function *newThoughtWatcher() {
  yield takeLatest(actionTypes.NEW_THOUGHT_INIT, newThoughtWorker)
}

export default newThoughtWatcher;