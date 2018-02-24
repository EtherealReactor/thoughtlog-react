import React from 'react';
import TypographyStyles from '../../UI/CSS/Typography.css';
import Styles from './Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={Styles.header}>
        <div >
          <h1 className={Styles.header__logo}>
            <span>Thought</span>
            <span>Log</span>
          </h1>
        </div>

        <nav className={Styles.header__nav}>
          <ul className={Styles.header__list}>
            <li >
              <NavLink
                to="/sign_in"
                exact
                className={TypographyStyles.Link}
                activeClassName={TypographyStyles.Selected}>
                Log in
              </NavLink>                      
            </li>
            <li >
              <NavLink 
                to="/sign_up"
                className={TypographyStyles.Link}
                activeClassName={TypographyStyles.Selected}>
                Sign up
              </NavLink> 
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;