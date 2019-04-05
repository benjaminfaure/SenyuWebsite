import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MenuIcon.scss';

class MenuIcon extends Component {


  render() {
    return (
      <div className={this.props.isMenuOpen ? "menu-icon open" : "menu-icon"}
        onClick={this.props.toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}


MenuIcon.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool
};




export default MenuIcon;
