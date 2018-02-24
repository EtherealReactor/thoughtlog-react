import { NOTIFICATION_SUCCESS } from './NotificationActionTypes';

export const notificationSuccess = (message) => {
    return {
        type: NOTIFICATION_SUCCESS,
        message
    }
}