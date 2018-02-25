import Editor from 'draft-js-plugins-editor';
import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import EditorStyles from '../../UI/CSS/Editor.css';
import { connect } from 'react-redux';
import { editThoughtInit } from './EditThoughtActions';
import FormStyles from '../../UI/CSS/Forms.css';
import axios from '../../AxiosGlobal';
import Loader from '../../UI/Loader/Loader';

import createInlineToolbarPlugin, {Separator}  from 'draft-js-inline-toolbar-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import { ItalicButton, BoldButton, UnderlineButton, CodeButton, OrderedListButton, UnorderedListButton, HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton } from 'draft-js-buttons';

import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-emoji-plugin/lib/plugin.css';
import 'draft-js-hashtag-plugin/lib/plugin.css';

const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    CodeButton,
    Separator,
    OrderedListButton,
    UnorderedListButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
  ]
});
const { InlineToolbar } = inlineToolbarPlugin;

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const hashtagPlugin = createHashtagPlugin();


const plugins = [inlineToolbarPlugin, emojiPlugin, hashtagPlugin];


class EditThought extends Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty(), title: '', id: this.props.match.params.id, loading: true };

    this.saveThought = this.saveThought.bind(this);
    this.draftThought = this.draftThought.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  };

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = JSON.parse(localStorage.getItem('token'));
    axios.get(`/thought/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          editorState:  EditorState.createWithContent(convertFromRaw(JSON.parse(res.data.description))),
          title: res.data.title,
          loading: false
        })
      })
      .catch((err) => {
      })
  }

  onChange = (editorState) => {
    this.setState({editorState})
  }

  handleTitleChange = (e) => {
    if(e.target.value.length > 0) {
      this.setState({title: e.target.value})
    }
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    };
    return 'not-handled';
  };

  saveThought = (event) => {
    let description = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    event.preventDefault();
    let params = {
      title: this.state.title,
      description: description,
      status: 'published',
      category: 'self',
      location: '/thoughts'
    }
    this.props.editThoughtInit(this.state.id, params)
  };

  draftThought = (event) => {
    let description = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    event.preventDefault();
    let params = {
      title: this.state.title,
      description: description,
      status: 'drafted',
      category: 'self',
      location: '/thoughts/drafts'
    }
    this.props.editThoughtInit(this.state.id, params)
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    if(this.state.loading) {
      return <Loader />
    }

    return (
      <div className={EditorStyles.Root} >
        <form onSubmit={this.saveThought}>
          <input type="text" placeholder="Type your title" name="title" className={EditorStyles.Title} onChange={this.handleTitleChange} value={this.state.title} />
          <div className={EditorStyles.Editor} onClick={this.focus}>
            <Editor
              onClick={this.focus}
              editorState={this.state.editorState}
              onChange={this.onChange}
              plugins={plugins}
              placeholder="The world is too small to understand your brain. Please do write in detail."
              ref={(element) => { this.editor = element; }}
            />
            <InlineToolbar />
            <EmojiSuggestions />
          </div>
          <div>
            <button className={FormStyles.formButton} type="button" onClick={this.saveThought}>Publish</button>
            <button className={FormStyles.formButton} type="button" onClick={this.draftThought}>Save as Draft</button>
          </div>
        </form>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    thought: state.newThought,
    entities: state.entities
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    editThoughtInit: (id, params) => dispatch(editThoughtInit(id, params))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditThought);
