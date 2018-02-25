import { NOTIFICATION_SUCCESS, NOTIFICATION_READ } from './NotificationActionTypes';

let initialState = { message: '' };

function notificationReducer(state=initialState, action) {
    if(action.type === NOTIFICATION_SUCCESS) {
        return {
            ...state,
            message: action.message
        }
    } else if (action.type === NOTIFICATION_READ) {
      return {
        ...state,
        message: ''
      }
    }
    return state;
}

export default notificationReducer;