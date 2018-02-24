import * as actionTypes from '../ThoughtActionTypes';

export const fetchThoughtSuccess = (data) => {
  return {
    type: actionTypes.FETCH_THOUGHT_SUCCESS,
    data
  };
};

export const fetchThoughtFailed = (errors) => {
  return {
    type: actionTypes.FETCH_THOUGHT_FAILED,
    errors
  };
};

export const fetchThoughtInit = (id) => {
  return {
    type: actionTypes.FETCH_THOUGHT_INIT,
    id
  }
}