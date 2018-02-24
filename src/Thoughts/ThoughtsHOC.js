import React from 'react';
import Styles from './ThoughtList/ThoughtList.css';
import ThoughtListItem from './ThoughtList/ThoughtListItem/ThoughtListItem';
import { thoughtListFetchInit } from './ThoughtList/ThoughtListActions';
import { connect } from 'react-redux';
import Loader from '../UI/Loader/Loader';

// class AllThoughts extends React.Component {
//   componentWillMount() {
//     console.log('coming=====', this.props.status);
//     this.props.fetchThoughtsList(this.props.status);
//   }
// 
//   // handleThoughtClick = (id) => {
//   //   this.props.history.push(`/thoughts/${id}`);
//   // }
// 
//   render() {
//     if(this.props.thoughtList.loading) {
//       return <Loader />
//     }
// 
//     let thoughts = ''
//     if (this.props.thoughtList.thoughtsList.length > 0 ) {
//       thoughts = this.props.thoughtList.thoughtsList.map((thought) => {
//         return <ThoughtListItem thought={thought} key={thought._id} handleThoughtClick={this.handleThoughtClick.bind(this, thought._id)}/>
//       });
//     } else {
//       thoughts = (
//         <p className={Styles.EmtpyState}>Looks like you don't have any thoughts logged. Please click on the <strong>Quick Thought</strong> in the sidebar to create one &#128516;</p>
//       )
//     }
// 
//     return (
//       <div className={Styles.Container}>
//         <ul className={Styles.List}>
//           {thoughts}
//         </ul>
//       </div>
//     );
//   };
// };
// 
// const mapStateToProps = (state) => {
//   return {
//     thoughtList: state.listThoughts
//   }
// }
// 
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchThoughtsList: (status) => dispatch(thoughtListFetchInit(status))
//   }
// }
// 
// export default connect(mapStateToProps, mapDispatchToProps)(AllThoughts);


function ThoughtHOC(status) {
  console.log('coming');
  class AllThoughts extends React.Component {
    componentWillMount() {
      console.log('coming=====', status);
      this.props.fetchThoughtsList(status);
    }

    // handleThoughtClick = (id) => {
    //   this.props.history.push(`/thoughts/${id}`);
    // }

    render() {
      if(this.props.thoughtList.loading) {
        return <Loader />
      }

      let thoughts = ''
      if (this.props.thoughtList.thoughtsList.length > 0 ) {
        thoughts = this.props.thoughtList.thoughtsList.map((thought) => {
          return <ThoughtListItem thought={thought} key={thought._id} handleThoughtClick={this.handleThoughtClick.bind(this, thought._id)}/>
        });
      } else {
        thoughts = (
          <p className={Styles.EmtpyState}>Looks like you don't have any thoughts logged. Please click on the <strong>Quick Thought</strong> in the sidebar to create one &#128516;</p>
        )
      }

      return (
        <div className={Styles.Container}>
          <ul className={Styles.List}>
            {thoughts}
          </ul>
        </div>
      );
    };
  };

  const mapStateToProps = (state) => {
    return {
      thoughtList: state.listThoughts
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchThoughtsList: (status) => dispatch(thoughtListFetchInit(status))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(AllThoughts);
}

export default ThoughtHOC;