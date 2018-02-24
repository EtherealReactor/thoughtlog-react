// import React, { Component } from 'react';
// import 'draft-js/dist/Draft.css';
// import { Editor, EditorState } from 'draft-js';
// import EditorStyles from '../UI/CSS/Editor.css';
// 
// class NewThought extends Component {
//   constructor() {
//     super()
//     this.state = { editorState: EditorState.createEmpty() }
//   };
// 
//   onChange = (editorState) => {
//     this.setState({editorState})
//   }
// 
//   focus = () => {
//     this.refs.editor.focus();
//   };
// 
//   render() {
//     return (
//       <div className={EditorStyles.Root}>
//         <div className={EditorStyles.Editor} onClick={this.focus}>
//           <Editor
//             editorState={this.state.editorState}
//             onChange={this.onChange}
//             placeholder="Start writing your thoughts here.."
//             ref="editor"
//           />
//         </div>
//       </div>
//     );
//   };
// };
// 
// 
// export default NewThought;
