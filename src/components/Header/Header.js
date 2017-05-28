/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import history from '../../core/history';
import $ from "jquery";
import Sidebar from '../Sidebar';

const logo = require('./logo.png');

function Header() {
  return (
    <div id="wrapper" className="content">
      <Navbar fluid={true}  style={ {margin: 0} }>
          <Brand>
            <span>
              <img src={logo} alt="Start React" title="Start React" />
              <span>&nbsp; Zenoffice  - Wolox </span>
            </span>
          </Brand>
          <ul className="nav navbar-top-links navbar-right">

           <NavDropdown title={<i className="fa fa-user fa-fw"></i> } id = 'navDropdown4'>
                  <MenuItem eventKey="1" onClick = {(event) => { history.push('/profile');}}>
                    <span> <i className="fa fa-user fa-fw"></i> Perfil </span>
                  </MenuItem>
                  <MenuItem eventKey="2" onClick = {(event) => { history.push('/config');}}>
                    <span><i className="fa fa-gear fa-fw"></i> Configuración </span>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey = "3" onClick = {(event) => { history.push('/login');}}>
                    <span> <i className = "fa fa-sign-out fa-fw" /> Logout </span>
                  </MenuItem>
                </NavDropdown>

          </ul>
          <Sidebar />
    </Navbar>
    </div>
  );
}
function toggleMenu(){
    if($(".navbar-collapse").hasClass('collapse')){
      $(".navbar-collapse").removeClass('collapse');
    }
    else{
      $(".navbar-collapse").addClass('collapse');
    }
  }

export default Header;
