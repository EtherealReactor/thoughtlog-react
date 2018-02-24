import React from 'react';
import Styles from './Notification.css';

const Notification = ({message}) => {
    return ( 
        message.length > 0 && <h1 className={Styles.container}>{message}</h1>
    )
}


export default Notification;