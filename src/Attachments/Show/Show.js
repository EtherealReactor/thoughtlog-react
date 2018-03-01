import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import Styles from './Show.css';

const Show = (props) => {
  console.log('props in show', props.attachment);
  return (
    <div className={Styles.Container}>
      <p className={Styles.Attachment}>
        {props.name}
        <span className={Styles.Actions}>
          { props.attachment.status === 'syncing' ?
            <FontAwesome.FaRefresh className={Styles.Loader}/> :
            <FontAwesome.FaCheckCircleO className={Styles.Done}/>
          }
        </span>
      </p>
    </div>
  );
};

export default Show;