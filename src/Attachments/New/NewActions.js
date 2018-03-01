import * as actionTypes from '../AttachmentActionTypes';

export const newAttachmentInit = (name, form) => {
  console.log('in action init', form);
  return {
    type: actionTypes.NEW_ATTACHMENT_INIT,
    name,
    form
  };
};

export const newAttachmentSuccess = (name, data) => {
  return {
    type: actionTypes.NEW_ATTACHMENT_SUCCESS,
    name,
    data
  }
}

export const newAttachmentFailed = (errors) => {
  return {
    type: actionTypes.NEW_ATTACHMENT_FAILED,
    errors
  }
}