import React from 'react';
import Dropzone from 'react-dropzone';
import Styles from './New.css';

const NewAttachment = (props) => {
  return (
    <Dropzone onDrop={props.onDrop} className={Styles.Upload}>
      <p>Try dropping some files here, or click to select files to upload.</p>
    </Dropzone>
  )
}

export default NewAttachment;