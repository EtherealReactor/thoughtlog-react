import React from 'react';
import Styles from '../ThoughtList/ThoughtList.css';
import ThoughtListItem from '../ThoughtList/ThoughtListItem/ThoughtListItem';
import { thoughtListFetchInit } from '../ThoughtList/ThoughtListActions';
import { connect } from 'react-redux';
import Loader from '../../UI/Loader/Loader';
import { withRouter } from 'react-router-dom';

class DraftThoughts extends React.Component {
  constructor(props) {
    super(props)
    console.log('1111223456');
  }

  componentDidMount() {
    console.log('component mounted ===== draft thought');
    this.props.fetchThoughtsList('drafted');
  }

  handleEdit = (id) => {
    this.props.history.push(`/thoughts/${id}/edit`)
  }

  render() {
    if(this.props.thoughtList.loading) {
      return <Loader />
    }

    let thoughts = ''
    if (this.props.thoughtList.thoughtsList.length > 0 ) {
      thoughts = this.props.thoughtList.thoughtsList.map((thought) => {
        return  <ThoughtListItem 
                  thought={thought}
                  key={thought._id}
                  onEditClick={this.handleEdit.bind(this, thought._id)}/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DraftThoughts));