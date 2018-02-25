import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Notification from './Notifications/Notification';
import Welcome from './Welcome/Welcome';
import Thoughts from './Thoughts/Thoughts';
import { closeNotification } from './Notifications/NotificationActions';


class App extends Component {
  
  handleClose = () => {
    console.log('coming to close click');
    this.props.notificationRead();
  }
  
  render() {
    return (
      <React.Fragment>
        <Notification message={this.props.message} handleClose={this.handleClose}/>  
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
    message: state.notification.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    notificationRead: () => dispatch(closeNotification())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
// export default connect(mapStateToProps, mapDispatchToProps)(App);
