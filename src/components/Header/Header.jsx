import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import './Header.css';
import MenuIcon from '../Menu/MenuIcon.jsx';

class Header extends Component {
  render() {

    const { t } = this.props;

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
          <h4 className="header-message" >
            <span> {t('banner.message')} </span>
          </h4>
          <MenuIcon toggleMenu={this.props.toggleMenu} isMenuOpen={this.props.isMenuOpen} />
          <h4 className="ticket-buy"><span></span></h4>
        </div>
      </header>
    );
  }
}


export default withNamespaces('translations')(Header);
