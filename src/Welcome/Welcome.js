import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './Header/Header';
import LoginForm from '../UI/Forms/Login/Login';
import SignupForm from '../UI/Forms/Signup/Signup';
import { signup } from '../User/Signup/SignupActions';
import { signin } from '../User/Signin/SigninActions';
import Styles from '../UI/CSS/Typography.css';

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
  };
  
  handleSignup = (values) => {
    return new Promise((resolve, reject) => {
      this.props.signup({...values, resolve, reject});
    });
  };
  
  handleSignin = (values) => {
    let referer = this.props.location.length > 0 ? this.props.location.state.from.pathname : '/thoughts'
    return new Promise((resolve, reject) => {
      this.props.signin({...values, resolve, reject, referer});         
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <p className={Styles.WelcomeText}>
        </p>
        <Switch>
          <Route path='/sign_in' render={(props) => (<LoginForm {...props} onSubmit={this.handleSignin} />)} />
          <Route path='/sign_up' render={(props) => (<SignupForm {...props} onSubmit={this.handleSignup} />)} />
          <Route path='/' render={() => <p className={Styles.WelcomeText}>Thoughtlog is an aggregation of daily thoughts which will help you capture critical snippets of information which you come across on daily basis that can help you transform yourself in your internal and external journey.</p>} />
        </Switch>
      </React.Fragment>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    signinProps: state.signin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (values) => { dispatch(signup(values)) },
    signin: (values) => { dispatch(signin(values)) }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Welcome));

