import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {newThoughtInit} from './NewThought/NewThoughtActions';

import Header from './Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AllThoughts from '../Thoughts/ThoughtList/ThoughtList';
import NewThought from '../Thoughts/NewThought/NewThought';
import DraftThoughts from './DraftThoughts/DraftThoughts';
import EditThought from './EditThought/EditThought';

class Thoughts extends React.Component {
  constructor() {
    super();
    this.handleNewClick  = this.handleNewClick.bind(this);
  }
  
  handleNewClick = () => {
    this.props.newThought();
  }
  
  render() {
    return (
      <React.Fragment>
        <Header handleNewClick={this.handleNewClick}/>
        <Switch>
          <ProtectedRoute path="/thoughts/:id/edit" component={EditThought} />
          <ProtectedRoute path="/thoughts/new" component={NewThought} />
          <ProtectedRoute path="/thoughts/drafts" component={DraftThoughts} />
          <Route exact path="/thoughts" render={() => (<AllThoughts status='published'/>)} />          
        </Switch>
      </React.Fragment>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newThought: () => dispatch(newThoughtInit())
  }
}

export default connect(null, mapDispatchToProps)(Thoughts);