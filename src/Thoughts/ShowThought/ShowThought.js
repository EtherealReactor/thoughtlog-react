import React from 'react';
import { connect } from 'react-redux';
import { fetchThoughtInit } from './ShowThoughtActions';
import Loader from '../../UI/Loader/Loader';
// import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import HashtagComponent from '../../UI/DraftComponents/HashTag';
import Styles from './ShowThought.css';


// const HashtagComponent = (props) => (
//   <span style={{color: 'orange'}}>{props.children}</span>
// );



const hashPlugin = {
  decorators: [{
    strategy: strategy,
    component: HashtagComponent,
  }],
};

const hashtagPlugin = createHashtagPlugin();
const plugins = [hashPlugin, hashtagPlugin];
// import 'draft-js-hashtag-plugin/lib/plugin.css';

// const HashTag = (props) => (<span style={{color: 'orange'}}>{props.children}</span>);

function strategy(contentBlock, callback) {
  const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = HASHTAG_REGEX.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}



class ShowThought extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() };
  };
  
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.fetchThoughtInit(id);
  }

  componentWillReceiveProps(nextProps) {
    let description = nextProps.thought.fetchedThought.description;
    let loading = nextProps.thought.loading;
  
    if(!loading) {
      let editorState = description !== undefined ?
        EditorState.createWithContent(convertFromRaw(JSON.parse(description))) :
        EditorState.createEmpty()
      this.setState({ editorState })
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.editorState !== nextState.editorState
  }

  onChange = (editorState) => {
    this.setState({editorState})
  }
  
  render() {
    let loading = this.props.thought.loading;
    
    if(loading) {
      return <Loader />
    }
    
    return (
      <div className={Styles.container}>
        <Editor
          onClick={this.focus}
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
        />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    thought: state.currentThought
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchThoughtInit: (id) => dispatch(fetchThoughtInit(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowThought);