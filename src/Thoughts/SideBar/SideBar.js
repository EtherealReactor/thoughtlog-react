import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa';

import SidebarStyles from './SideBar.css';

const SideBar = (props) => {
  return (
    <aside className={SidebarStyles.SidebarNav}>
      <nav>
        <ul className={SidebarStyles.SidebarList}>
          <li className={SidebarStyles.SideBarListItem}>
            <Link to="/thoughts/new" className={SidebarStyles.SideBarLink}>Quick Thought
              <FontAwesome.FaPlusSquareO className={SidebarStyles.SideBarIcon}/>
            </Link>
          </li>
          <li className={SidebarStyles.SideBarListItem}>
            <Link to="/thoughts/drafts" className={SidebarStyles.SideBarLink} >Saved Thought
              <FontAwesome.FaArrowDown className={SidebarStyles.SideBarIcon}/>
            </Link>
          </li>
        </ul>
      </nav>    
    </aside>
  );
}

export default SideBar;