import React from 'react';
import Styles from './ThoughtList/ThoughtList.css';
import ThoughtListItem from './ThoughtList/ThoughtListItem/ThoughtListItem';
import { thoughtListFetchInit } from './ThoughtList/ThoughtListActions';
import { connect } from 'react-redux';
import Loader from '../UI/Loader/Loader';
import { withRouter } from 'react-router-dom';
import Confirm from '../UI/Confirm/Confirm';
import { deleteThoughtInit, deleteThoughtCancel, deleteThoughtConfirm } from './DeleteThought/DeleteThoughtAction';
import { loadMoreInit } from './LoadMoreThoughts/LoadMoreThoughtsAction'; 

const ThoughtListHoc = (props) => {
  class ThoughtList extends React.Component {
    
    componentDidMount() {
      this.props.fetchThoughtsList(props.status);
      window.addEventListener('scroll', this.onScroll, false);
     }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }
     
     onScroll = () => {
       let { current_page, total_pages } = this.props.entities
       // console.log('total_pages', total_pages);
       // console.log('current_page', current_page);
        if (
          (window.innerHeight + window.scrollY) >= (document.body.offsetHeight + 160) && total_pages > current_page) {
          this.props.loadMoreInit(props.status, current_page + 1)
        }
      }

    handleEdit = (id) => {
      this.props.history.push(`/thoughts/${id}/edit`)
    }
    
    handleDelete = (id) => {
      this.props.deleteThoughtInit(id)
    }
    
    handleConfirm = () => {
      let id = this.props.entities.current_thought_id;
      console.log('id', id);
      this.props.deleteThoughtConfirm(id);
    }
    
    handleCancel = () => {
      this.props.deleteThoughtCancel()
    }

    render() {
      if(this.props.entities.loading) {
        return <Loader />
      }

      let thoughts = ''
      if (this.props.entities.thoughts.length > 0 ) {
        thoughts = this.props.entities.thoughts.map((thought) => {
          return  <ThoughtListItem 
                    thought={thought}
                    key={thought._id}
                    onEditClick={this.handleEdit.bind(this, thought._id)}
                    onDeleteClick={this.handleDelete.bind(this, thought._id)}/>
        });
      } else {
        thoughts = (
          <p className={Styles.EmtpyState}>Looks like you don't have any thoughts logged. Please click on the <strong>Quick Thought</strong> in the sidebar to create one &#128516;</p>
        )
      }

      return (
        <React.Fragment>
          { this.props.entities.show_confirm &&
            <div className={Styles.Confirm} >
              <Confirm handleConfirm={this.handleConfirm} handleCancel={this.handleCancel} />
            </div>
          }
    
          { !this.props.entities.loading && 
            <div className={Styles.Container} ref={node => { this.node = node }}>
              <ul className={Styles.List}>
                {thoughts}
              </ul>
            </div>
          }
        </React.Fragment>
      );
    };
  };

  const mapStateToProps = (state) => {
    return {
      entities: state.entities
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchThoughtsList: (status) => dispatch(thoughtListFetchInit(status)),
      deleteThoughtCancel: () => dispatch(deleteThoughtCancel()),
      deleteThoughtInit: (id) => dispatch(deleteThoughtInit(id)),
      deleteThoughtConfirm: (id) => dispatch(deleteThoughtConfirm(id)),
      loadMoreInit: (status, page) => dispatch(loadMoreInit(status, page))
    }
  }

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(ThoughtList));
}

export default ThoughtListHoc;