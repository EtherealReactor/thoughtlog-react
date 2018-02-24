import React from 'react';
import Styles from './Confirm.css';

const Confirm = (props) => {
  return (
    <div className={Styles.Container}>
      <strong className={Styles.Text}>Are you sure you want to delete this?</strong>
      <div className={Styles.Actions}>
        <button onClick={props.handleConfirm}>Ok</button>
        <button onClick={props.handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default Confirm;
