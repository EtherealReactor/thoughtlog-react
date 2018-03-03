import React from 'react';
import Attachment from '../Show/Show';

const  AttachmentIndex = ({attachments}) => {
  let attachmentList = [];
  let attachmentNames = Object.keys(attachments);
  
  if(attachmentNames.length !== 0) {
    for (let key of attachmentNames) {
      attachmentList.push(<Attachment name={key} key={key} attachment={attachments[key]} />)
    }
  }

  return (
    attachmentList
  );
};

export default AttachmentIndex;

