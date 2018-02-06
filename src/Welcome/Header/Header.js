import React from 'react';
import Styles from './Header.css';
import { Switch, Route, Link } from 'react-router-dom';
import LoginForm from '../../UI/Forms/Login/Login';
import SignupForm from '../../UI/Forms/Signup/Signup';

const Header = () => {
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
                <Link to="/log_in" className={Styles.navigation__link}>Log in</Link>                      
              </li>
              <li className={Styles.navigation__item}>
                <Link to="/sign_up" className={Styles.navigation__link}>Sign up</Link> 
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <Switch>
        <Route path="/log_in" component={LoginForm} />
        <Route path="/sign_up" render={(props) => { return <SignupForm /> }} />
      </Switch>
    </div>
  )
}

export default Header;