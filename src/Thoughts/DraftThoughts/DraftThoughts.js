// import React from 'react';
import ThoughtListHoc from '../ThoughtsHOC';

export default ThoughtListHoc({status: 'drafted'});
// import Styles from '../ThoughtList/ThoughtList.css';
// import ThoughtListItem from '../ThoughtList/ThoughtListItem/ThoughtListItem';
// import { thoughtListFetchInit } from '../ThoughtList/ThoughtListActions';
// import { connect } from 'react-redux';
// import Loader from '../../UI/Loader/Loader';
// import { withRouter } from 'react-router-dom';
// import Confirm from '../../UI/Confirm/Confirm';
// import { deleteThoughtInit, deleteThoughtCancel, deleteThoughtConfirm } from '../DeleteThought/DeleteThoughtAction';
// 
// 
// class DraftThoughts extends React.Component {
// 
//   componentDidMount() {
//     this.props.fetchThoughtsList('drafted');
//   }
// 
//   handleEdit = (id) => {
//     this.props.history.push(`/thoughts/${id}/edit`)
//   }
// 
//   handleDelete = (id) => {
//     this.props.deleteThoughtInit(id)
//   }
// 
//   handleConfirm = () => {
//     let id = this.props.entities.current_thought_id;
//     console.log('id', id);
//     this.props.deleteThoughtConfirm(id);
//   }
// 
//   handleCancel = () => {
//     this.props.deleteThoughtCancel()
//   }
// 
//   render() {
//     if(this.props.entities.loading) {
//       return <Loader />
//     }
// 
//     let thoughts = ''
//     if (this.props.entities.thoughts.length > 0 ) {
//       thoughts = this.props.entities.thoughts.map((thought) => {
//         return  <ThoughtListItem 
//                   thought={thought}
//                   key={thought._id}
//                   onEditClick={this.handleEdit.bind(this, thought._id)}
//                   onDeleteClick={this.handleDelete.bind(this, thought._id)}/>
//       });
//     } else {
//       thoughts = (
//         <p className={Styles.EmtpyState}>Looks like you don't have any thoughts logged. Please click on the <strong>Quick Thought</strong> in the sidebar to create one &#128516;</p>
//       )
//     }
// 
//     return (
//       <div>
//         { this.props.entities.show_confirm &&
//           <div className={Styles.Confirm} >
//             <Confirm handleConfirm={this.handleConfirm} handleCancel={this.handleCancel} />
//           </div>
//         }
// 
//         <div className={Styles.Container} ref={node => { this.node = node }}>
//           <ul className={Styles.List}>
//             {thoughts}
//           </ul>
//         </div>
//       </div>
//     );
//   };
// };
// 
// const mapStateToProps = (state) => {
//   return {
//     entities: state.entities
//   }
// }
// 
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchThoughtsList: (status) => dispatch(thoughtListFetchInit(status)),
//     deleteThoughtCancel: () => dispatch(deleteThoughtCancel()),
//     deleteThoughtInit: (id) => dispatch(deleteThoughtInit(id)),
//     deleteThoughtConfirm: (id) => dispatch(deleteThoughtConfirm(id))
//   }
// }
// 
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DraftThoughts));