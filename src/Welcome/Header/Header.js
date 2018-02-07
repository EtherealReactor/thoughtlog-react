import React from 'react';
import TypographyStyles from '../../UI/CSS/Typography.css';
import Styles from './Header.css';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import LoginForm from '../../UI/Forms/Login/Login';
import SignupForm from '../../UI/Forms/Signup/Signup';
import { connect } from 'react-redux';
import { signup } from '../../User/UserActions';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit = (values) => {
    this.props.signup(values);
  }
  
  render() {
    return (
      <div>
        <header className={Styles.header}>
          <div className={Styles.header__content}>
            <div className={Styles.header__logo}>
              <h1 className={Styles.logo__name}>
                <span>Thought</span>
                <span>Log</span>
              </h1>
            </div>
    
            <nav className={Styles.navigation}>
              <ul className={Styles.navigation__list}>
                <li className={Styles.navigation__item}>
                  <NavLink
                    to="/log_in"
                    className={TypographyStyles.Link}
                    activeClassName={TypographyStyles.Selected}>
                    Log in
                  </NavLink>                      
                </li>
                <li className={Styles.navigation__item}>
                  <NavLink 
                    to="/sign_up"
                    className={TypographyStyles.Link}
                    activeClassName={TypographyStyles.Selected}>
                    Sign up
                  </NavLink> 
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <Switch>
          <Route path="/log_in" component={LoginForm} />
          <Route path="/sign_up" render={(props) => { return <SignupForm onSubmit={this.handleSubmit} /> }} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (values) => { dispatch(signup(values)) }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));