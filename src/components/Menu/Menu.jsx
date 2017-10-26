import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Menu.css';

import FaAngleDown from 'react-icons/lib/fa/angle-down';

class Menu extends Component {
  render() {
    return (
      <nav className="nav-wrap">
        <ul className="menu">{/* menu principal */}
          <li className="menu-item"><Link to="/"><span>Accueil</span></Link></li>
          <li className="menu-item">{/* sous menu infos */}
            <Link to="/"><span>Infos Pratiques</span><span className="menu-item-arrow-down">&nbsp;<FaAngleDown/></span></Link>
            <ul className="menu-content">
              <li><Link to="/faq"><span>FAQ</span></Link></li>
              <li><Link to="/reglements"><span>Règlements</span></Link></li>
              <li><Link to="/plans"><span>Plan</span></Link></li>
              <li><Link to="/planning"><span>Planning</span></Link></li>
              <li><Link to="/guide"><span>Guide du Visiteur</span></Link></li>
              <li><Link to="/contact"><span>Contact</span></Link></li>
            </ul>
          </li>{/* sous menu infos */}
          <li className="menu-item"><Link to="/exposants"><span>Exposants</span></Link></li>
          <li className="menu-item"><Link to="/invites"><span>Invités</span></Link></li>
          <li className="menu-item"><Link to="/cosplay"><span>Cosplay</span></Link></li>
          <li className="menu-item"><Link to="/animations"><span>Animations</span></Link></li>
          <li className="menu-item"><Link to="/stream"><span>Stream</span></Link></li>
        </ul>
      </nav>
    );
  }
}



export default Menu;
