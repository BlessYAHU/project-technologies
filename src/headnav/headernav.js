import React, { Component } from 'react';
import { Link} from 'react-router-dom'

  let HeaderNav = ()=> {
    return (
        <div className="head-nav">
           <ul className="nav-items">
             <li><Link to="/projectlist">Project List</Link></li>
             <li><Link to="/projectform">Add Technology</Link></li>
          </ul>
          <div className="subnav"></div>
        </div>
    );
}

export default HeaderNav;