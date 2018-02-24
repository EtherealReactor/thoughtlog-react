import React from 'react';
import Styles from '../../Welcome/Header/Header.css';
import HeaderStyles from './Header.css';
import SideBar from '../SideBar/SideBar';

export class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className={HeaderStyles.header}>
          <div >
            <h1 className={HeaderStyles.header__logo}>
              <span>Thought</span>
              <span>Log</span>
            </h1>
          </div>
          
          <div >
            <SideBar className={Styles.header__nav} handleNewClick={this.props.handleNewClick}/>
          </div>
        </header>
      </React.Fragment>
    );
  };
};

export default Header;