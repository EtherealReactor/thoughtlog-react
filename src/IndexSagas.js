import {all} from 'redux-saga/effects';
import userSignupSaga from './User/Signup/SignupSaga';
import userSigninSaga from './User/Signin/SigninSaga';
import newThoughtSaga from './Thoughts/NewThought/NewThoughtSagas';
import editThoughtSaga from './Thoughts/EditThought/EditThoughtSagas';
import listThoughtsSaga from './Thoughts/ThoughtList/ThoughtListSagas';
import deleteThoughtSaga from './Thoughts/DeleteThought/DeleteThoughtSagas';
import loadMoreSaga from './Thoughts/LoadMoreThoughts/LoadMoreThoughtsSagas';
import attachmentSaga from './Attachments/AttachmentSagas';

export default function* IndexSaga () {  
    yield all([
      userSignupSaga(),
      userSigninSaga(),
      newThoughtSaga(),
      editThoughtSaga(),
      listThoughtsSaga(),
      // fetchThoughtSaga(),
      deleteThoughtSaga(),
      loadMoreSaga(),
      attachmentSaga()
    ])
  }