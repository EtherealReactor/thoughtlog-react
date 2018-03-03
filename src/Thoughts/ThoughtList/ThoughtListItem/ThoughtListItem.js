import React from 'react';
import Styles from './ThoughtListItem.css';
import Moment from 'react-moment';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import { EditorState, convertFromRaw, ContentState } from 'draft-js';
import * as FontAwesome from 'react-icons/lib/fa';
import 'draft-js-hashtag-plugin/lib/plugin.css';
import Show from '../../../Attachments/Show/Show';

const hashtagPlugin = createHashtagPlugin();
const plugins = [hashtagPlugin];


class ThoughtListItem extends React.Component {
  
  state = {
    editorState: EditorState.createEmpty()
  };

  componentWillMount() {
    let description = this.props.thought.description;
    let editorState = '';

    try {
      editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(description)))
    } catch (e) {
      editorState = description && description.length > 0 ? EditorState.createWithContent(ContentState.createFromText(description)) : EditorState.createEmpty()
    } finally {
      this.setState({
        editorState:  editorState
      })
    }
  }
  
  onChange = (editorState) => {
    this.setState({editorState})
  }
  
  showAttachments = (attachments) => {
    return attachments.map((file) => {
      return <Show name={file.name} s3_url={file.s3_url} key={file._id} hide_status />
    })
  }
  
  render() {
    return (
      <li className={Styles.Item}>
        <div>
          <h1 className={Styles.Heading}>{this.props.thought.title}</h1>
          <b>{this.props.thought.author}</b>
          <strong className={Styles.TimeStamp}><Moment fromNow>{this.props.thought.updated_at}</Moment></strong>
          <div>
            <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              plugins={plugins}
              readOnly={true}
            />
          </div>
          <div>
            {this.props.thought.attachments && this.showAttachments(this.props.thought.attachments)}
          </div>
          <div className={Styles.Actions}>
            <FontAwesome.FaPencil className={Styles.ActionIcon} onClick={this.props.onEditClick}/>
            <FontAwesome.FaTrash className={Styles.ActionIcon} onClick={this.props.onDeleteClick}/>
          </div>
        </div>
      </li>
    )
  }
}

export default ThoughtListItem;