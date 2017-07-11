import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Header.css';
import MenuIcon from '../Menu/MenuIcon.jsx';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-content">
          <h4 className="logo"><Link to="/"><img src="/logo_desktop.png" alt="logo"/></Link></h4>
          <h4 className="header-message"><span>Senyu revient du 3 au 4 Mars 2018 </span></h4>
          <MenuIcon/>
          <h4 className="ticket-buy"><span></span></h4>
        </div>
      </header>
    );
  }
}


export default Header;
