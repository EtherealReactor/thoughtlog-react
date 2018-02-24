import * as actionTypes from '../ThoughtActionTypes';

export const thoughtListFetchSuccess = (data) => {
  return {
    type: actionTypes.THOUGHT_LIST_FETCH_SUCCESS,
    thoughts: data.thoughts,
    current_page: data.current_page,
    total_pages: data.total_pages
  };
};

export const thoughtListFetchFailed = (errors) => {
  console.log('errors', errors);
  return {
    type: actionTypes.THOUGHT_LIST_FETCH_FAILED,
    errors
  };
};

export const thoughtListFetchInit = (status) => {
  return {
    type: actionTypes.THOUGHT_LIST_FETCH_INIT,
    status
  };
};