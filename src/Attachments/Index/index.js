import React from 'react';
import { connect } from 'react-redux';
import Attachment from '../Show/Show';

class AttachmentIndex extends React.Component {
  render() {
    let attachmentList = [];
    let attachments = this.props.attachments;
    let attachmentNames = Object.keys(this.props.attachments);
    
    if(attachmentNames.length !== 0) {
      for (let key of attachmentNames) {
        console.log('key', key);
        attachmentList.push(<Attachment name={key} key={key} attachment={attachments[key]} />)
      }
      console.log('attachment array', attachments);
    }

    return (
      attachmentList
    );
  };
};

const mapStateToProps = (state) => {
  return {
    attachments: state.attachments.records
  }
}

export default connect(mapStateToProps, null)(AttachmentIndex);

