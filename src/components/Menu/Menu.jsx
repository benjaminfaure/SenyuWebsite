import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Menu.css';

import FaAngleDown from 'react-icons/lib/fa/angle-down';

class Menu extends Component {
  render() {
    return (
      <nav className="nav-wrap">
        <ul className="menu">{/* menu principal */}
          <li className="menu-item"><Link to="/"><span>Actualités</span></Link></li>
          <li className="menu-item">{/* sous menu exposants */}
            <Link to="/"><span>Exposants</span><span className="menu-item-arrow-down">&nbsp;<FaAngleDown/></span></Link>
            <ul className="menu-content">
              <li><Link to="/">Invités</Link></li>
              <li><Link to="/">Boutiques</Link></li>
              <li><Link to="/">Créateurs</Link></li>
              <li><Link to="/intervenants">Tous nos exposants</Link></li>
            </ul>
          </li>{/* sous menu exposants */}
          <li className="menu-item">{/* sous menu animations */}
            <Link to="/"><span>Animations</span><span className="menu-item-arrow-down">&nbsp;<FaAngleDown/></span></Link>
            <ul className="menu-content">
              <li><Link to="/">Senyu</Link></li>
              <li><Link to="/">Associations</Link></li>
              <li><Link to="/">Culture</Link></li>
            </ul>
          </li>{/* sous menu animations */}
          <li className="menu-item">{/* sous menu infos */}
            <Link to="/"><span>Infos</span><span className="menu-item-arrow-down">&nbsp;<FaAngleDown/></span></Link>
            <ul className="menu-content">
              <li><Link to="/faq"><span>FAQ</span></Link></li>
              <li><Link to="/"><span>Règlements</span></Link></li>
              <li><Link to="/"><span>Plan</span></Link></li>
              <li><Link to="/"><span>Planning</span></Link></li>
              <li><Link to="/"><span>Contact</span></Link></li>
            </ul>
          </li>{/* sous menu infos */}
          <li className="menu-item"><Link to="/"><span>Blog</span></Link></li>
        </ul>
      </nav>
    );
  }
}



export default Menu;
