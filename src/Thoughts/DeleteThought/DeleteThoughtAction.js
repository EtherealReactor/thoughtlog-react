import * as actionTypes from '../ThoughtActionTypes';

export const deleteThoughtSuccess = (id) => {
  return {
    type: actionTypes.DELETE_THOUGHT_SUCCESS,
    id
  };
};

export const deleteThoughtFailed = (errors) => {
  return {
    type: actionTypes.DELETE_THOUGHT_FAILED,
    errors
  };
};

export const deleteThoughtInit = (id) => {
  return {
    type: actionTypes.DELETE_THOUGHT_INIT,
    id
  }
}

export const deleteThoughtConfirm = (id) => {
  return {
    type: actionTypes.DELETE_THOUGHT_CONFIRM,
    id
  }
}

export const deleteThoughtCancel = () => {
  return {
    type: actionTypes.DELETE_THOUGHT_CANCEL
  }
}