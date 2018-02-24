import React from 'react';
import Styles from './ThoughtListItem.css';
import Moment from 'react-moment';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import { EditorState, convertFromRaw } from 'draft-js';
import * as FontAwesome from 'react-icons/lib/fa';
import 'draft-js-hashtag-plugin/lib/plugin.css';

const hashtagPlugin = createHashtagPlugin();
const plugins = [hashtagPlugin];


class ThoughtListItem extends React.Component {
  
  state = {
    editorState: EditorState.createEmpty()
  };

  componentWillMount() {
    let editorState = this.props.thought.description !== undefined ?
      EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.thought.description))) :
      EditorState.createEmpty()
    this.setState({
      editorState:  editorState
    })
  }
  
  onChange = (editorState) => {
    this.setState({editorState})
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
            />
          </div>
          <div className={Styles.Actions}>
            <FontAwesome.FaPencil className={Styles.ActionIcon} onClick={this.props.onEditClick}/>
            <FontAwesome.FaTrash className={Styles.ActionIcon} />
          </div>
        </div>
      </li>
    )
  }
}

export default ThoughtListItem;