import * as actionTypes from '../ThoughtActionTypes';

export const newThoughtSuccess = (thought) => {
  return {
    type: actionTypes.NEW_THOUGHT_SUCCESS,
    thought
  };
};

export const newThoughtFailed = (errors) => {
  return {
    type: actionTypes.NEW_THOUGHT_FAILED,
    errors
  };
};

export const newThoughtInit = (params) => {
  return {
    type: actionTypes.NEW_THOUGHT_INIT,
    params
  }
}