import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Header.css';
import MenuIcon from '../Menu/MenuIcon.jsx';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-content">
          <h4 className="logo">
            <Link to="/">
              <picture>
                <source media="(min-width: 1024px)" srcSet="/images/logo_desktop.png"></source>
                <img src="/images/logo_mobile.png" alt="senyu logo" />
              </picture>
            </Link>
          </h4>
          <h4 className="header-message" itemScope itemType="http://schema.org/Event">
            <span> <span itemProp="name">Senyu</span> revient du
            <time itemProp="startDate" dateTime="2018-03-03"> 3</time> au
            <time itemProp="endDate" dateTime="2018-03-04"> 4</time> Mars 2018
            </span>
          </h4>
          <MenuIcon toggleMenu={this.props.toggleMenu} isMenuOpen={this.props.isMenuOpen} />
          <h4 className="ticket-buy"><span></span></h4>
        </div>
      </header>
    );
  }
}


export default Header;
