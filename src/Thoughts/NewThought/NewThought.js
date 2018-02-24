import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, RichUtils, convertToRaw } from 'draft-js';
import { newThoughtInit } from './NewThoughtActions';
import { connect } from 'react-redux';


import createInlineToolbarPlugin, {Separator}  from 'draft-js-inline-toolbar-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import { ItalicButton, BoldButton, UnderlineButton, CodeButton, OrderedListButton, UnorderedListButton, HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton } from 'draft-js-buttons';


import EditorStyles from '../../UI/CSS/Editor.css';
import 'draft-js/dist/Draft.css';
import FormStyles from '../../UI/CSS/Forms.css';
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



class NewThought extends Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty(), title: '' };

    this.saveThought = this.saveThought.bind(this);
    this.draftThought = this.draftThought.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  };

  onChange = (editorState) => {
    this.setState({editorState})
  }

  focus = () => {
    this.editor.focus();
  };

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
      category: 'self'
    }
    this.props.thoughtInit(params)
  };

  draftThought = (event) => {
    let description = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    event.preventDefault();
    let params = {
      title: this.state.title,
      description: description,
      status: 'drafted',
      category: 'self'
    }
    this.props.thoughtInit(params)
  };

  render() {
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

const mapDispatchToProps = (dispatch) => {
  return {
    thoughtInit: (params) => dispatch(newThoughtInit(params))
  }
}


export default connect(null, mapDispatchToProps)(NewThought);
