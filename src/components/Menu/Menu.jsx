import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <nav className="nav-wrap">
        <ul className="menu">{/* menu principal */}
          <li className="menu-item"><a href="#"><span>Actualités</span></a></li>
          <li className="menu-item">{/* sous menu exposants */}
            <a href="#"><span>Exposants</span><div className="arrow"></div></a>
            <ul className="menu-content">
              <li><a href="#">Invités</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Créateurs</a></li>
              <li><a href="#">Tous nos exposants</a></li>
            </ul>
          </li>{/* sous menu exposants */}
          <li className="menu-item">{/* sous menu animations */}
            <a href="#"><span>Animations</span><div className="arrow"></div></a>
            <ul className="menu-content">
              <li><a href="#">Senyu</a></li>
              <li><a href="#">Associations</a></li>
              <li><a href="#">Culture</a></li>
            </ul>
          </li>{/* sous menu animations */}
          <li className="menu-item">{/* sous menu infos */}
            <a href="#"><span>Infos</span><div className="arrow"></div></a>
            <ul className="menu-content">
              <li><a href="#"><span>FAQ</span></a></li>
              <li><a href="#"><span>Règlements</span></a></li>
              <li><a href="#"><span>Plan</span></a></li>
              <li><a href="#"><span>Planning</span></a></li>
              <li><a href="#"><span>Contact</span></a></li>
            </ul>
          </li>{/* sous menu infos */}
          <li className="menu-item"><a href="#"><span>Blog</span></a></li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
