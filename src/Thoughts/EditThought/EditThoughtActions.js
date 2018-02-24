import * as actionTypes from '../ThoughtActionTypes';

export const editThoughtSuccess = (thought) => {
  return {
    type: actionTypes.EDIT_THOUGHT_SUCCESS,
    thought
  };
};

export const editThoughtFailed = (errors) => {
  return {
    type: actionTypes.EDIT_THOUGHT_FAILED,
    errors
  };
};

export const editThoughtInit = (id, params) => {
  return {
    type: actionTypes.EDIT_THOUGHT_INIT,
    id,
    params
  }
}