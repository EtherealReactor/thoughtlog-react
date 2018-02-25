import { NOTIFICATION_SUCCESS, NOTIFICATION_READ } from './NotificationActionTypes';

export const notificationSuccess = (message) => {
    return {
        type: NOTIFICATION_SUCCESS,
        message
    }
}

export const closeNotification = () => {
    return {
        type: NOTIFICATION_READ
    }
}