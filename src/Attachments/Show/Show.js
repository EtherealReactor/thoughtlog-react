import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import Styles from './Show.css';

const Show = (props) => {
  let name = props.name
  let url = props.s3_url ? props.s3_url : '';
  let status = props.attachment && props.attachment.status;

  return (
    <div className={Styles.Container}>
      <p className={Styles.Attachment}>
        <a href={url}>{name}</a>
        {
          !props.hide_status && <span className={Styles.Actions}>
            { status === 'syncing' ?
              <FontAwesome.FaRefresh className={Styles.Loader}/> :
              <FontAwesome.FaCheckCircleO className={Styles.Done}/>
            }
          </span>
        }
      </p>
    </div>
  );
};

export default Show;