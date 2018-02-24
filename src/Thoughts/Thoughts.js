import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {newThoughtInit} from './NewThought/NewThoughtActions';

import Header from './Header/Header';
import AllThoughts from '../Thoughts/ThoughtList/ThoughtList';
import NewThought from '../Thoughts/NewThought/NewThought';
import DraftThoughts from './DraftThoughts/DraftThoughts';
import EditThought from './EditThought/EditThought';
// import ShowThought from './ShowThought/ShowThought';

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
          <Route path="/thoughts/:id/edit" component={EditThought} />
          <Route path="/thoughts/new" component={NewThought} />
          <Route path="/thoughts/drafts" render={() => (<DraftThoughts />)} />
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