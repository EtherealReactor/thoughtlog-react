import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Welcome from './Welcome/Welcome';
import Thoughts from './Thoughts/Thoughts';

// <Notification message={this.props.message} />


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <ProtectedRoute path="/thoughts" component={Thoughts} />
          <Route path='/' render={(props) => ( <Welcome {...props} />)} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // message: state.notifications.message
  }
}

// export default withRouter(connect(mapStateToProps, null)(App));
export default App;
