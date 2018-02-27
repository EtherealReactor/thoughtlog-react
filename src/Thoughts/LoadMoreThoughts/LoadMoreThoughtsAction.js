import * as actionTypes from '../ThoughtActionTypes';

export const loadMoreSuccess = (thoughts, current_page, total_pages) => {
  return {
    type: actionTypes.LOAD_MORE_SUCCESS,
    thoughts,
    current_page,
    total_pages
  };
};

export const loadMoreFailed = (errors) => {
  console.log('errors', errors);
  return {
    type: actionTypes.LOAD_MORE_FAILED,
    errors
  };
};

export const loadMoreInit = (status, page) => {
  return {
    type: actionTypes.LOAD_MORE_INIT,
    status,
    page
  };
};