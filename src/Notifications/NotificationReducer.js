import { NOTIFICATION_SUCCESS } from './NotificationActionTypes';

let initialState = { message: '' };

function notificationReducer(state=initialState, action) {
    if(action.type === NOTIFICATION_SUCCESS) {
        return {
            ...state,
            message: action.message
        }
    }
    return state;
}

export default notificationReducer;