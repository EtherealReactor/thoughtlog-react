import React from 'react';
import Styles from './Notification.css';
import * as FontAwesome from 'react-icons/lib/fa';


const Notification = ({message, handleClose}) => {
    return ( 
        message && 
        <div className={Styles.container}>
          <FontAwesome.FaTimesCircle className={Styles.close} onClick={handleClose}/>
          <p>{message}</p>
        </div>
    )
}


export default Notification;