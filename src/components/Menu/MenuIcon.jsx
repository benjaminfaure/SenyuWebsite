import React, { Component } from 'react';
import './MenuIcon.css';

class MenuIcon extends Component {


  constructor() {
    super(...arguments);
    this.state = {
      showMenu: false
    };
  }

  toggleMenu() {
    this.setState({showDetails: !this.state.showMenu});
  }

  render() {
    return (
      <div className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}

export default MenuIcon;
