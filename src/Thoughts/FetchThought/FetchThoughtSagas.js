import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../ThoughtActionTypes';

function *fetchThoughtWorker(action) {
  yield 'hello';
}

function *fetchThoughtWatcher() {
  yield takeLatest(actionTypes.FETCH_THOUGHT_INIT, fetchThoughtWorker);
};

export default fetchThoughtWatcher;