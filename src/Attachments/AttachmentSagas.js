import { takeEvery, put, call } from 'redux-saga/effects'
import * as actionTypes from './AttachmentActionTypes';
import { newAttachmentSuccess, newAttachmentFailed} from './New/NewActions';
import axios from '../AxiosGlobal';

let upload = (token, form) => {
  console.log('form request in axios', form);
  return axios.post('/attachments', form)
}

function *attachmentWorker(action) {
  let token = JSON.parse(localStorage.getItem('token'));
  try {
    let res = yield call(upload, token, action.form)
    yield put(newAttachmentSuccess(action.name, res.data))
  } catch (e) {
    yield put(newAttachmentFailed(e.response.data))
  }
}


function *attachmentWatcher() {
  yield takeEvery(actionTypes.NEW_ATTACHMENT_INIT, attachmentWorker)
}

export default attachmentWatcher;