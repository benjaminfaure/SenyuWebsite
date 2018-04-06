import React, { Component } from 'react';
import Sticky from 'react-sticky-el';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwitchActionCreators from '../../actions/TwitchActionCreators';

import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaCircle from 'react-icons/lib/fa/circle';

import './Menu.css';


class Menu extends Component {

  componentDidMount() {
    this.props.fetchIsSenyuChannelLive();
  }


  render() {

    const streamMenu = this.props.isLive ?
      <li className="menu-item menu-item-special"><Link to="/stream"><span><FaCircle /></span> <span>Stream</span></Link></li> :
      <li className={ this.menuClassName("/stream", true) }><Link to="/stream"><span>Stream</span></Link></li>;

    const menu = (
      <ul className="menu">{/* menu principal */}
        <li className="menu-item accueil"><Link to="/"><span><img src="/images/logo_black.png" alt="senyu logo" /></span></Link></li>
        <li className="menu-item">{/* sous menu infos */}
          <Link to="/"><span>Infos Pratiques</span><span className="menu-item-arrow-down">&nbsp;<FaAngleDown /></span></Link>
          <ul className="menu-content">
            <li className={ this.menuClassName("faq", true) }><Link to="/faq"><span>FAQ</span></Link></li>
            <li className={ this.menuClassName("reglements", true) }><Link to="/reglements"><span>Règlements</span></Link></li>
            <li className={ this.menuClassName("plans", true) }><Link to="/plans"><span>Plan</span></Link></li>
            <li className={ this.menuClassName("planning", true) }><Link to="/planning"><span>Planning</span></Link></li>
            <li className={ this.menuClassName("guide", true) }><Link to="/guide"><span>Guide du Visiteur</span></Link></li>
            <li className={ this.menuClassName("contact", true) }><Link to="/contact"><span>Contact</span></Link></li>
            <li className={ this.menuClassName("communication", true) }><Link to="/communication"><span>Communication</span></Link></li>
          </ul>
        </li>{/* sous menu infos */}
        <li className={ this.menuClassName("exposants", true) }><Link to="/exposants"><span>Exposants</span></Link></li>
        <li className={ this.menuClassName("invites", true) }><Link to="/invites"><span>Invités</span></Link></li>
        <li className={ this.menuClassName("cosplay", true) }><Link to="/cosplay"><span>Cosplay</span></Link></li>
        <li className={ this.menuClassName("animations", true) }><Link to="/animations"><span>Animations</span></Link></li>
        {streamMenu}
        {/*<li className="menu-item menu-item-special"><Link to="/billeterie"><span>Billeterie</span></Link></li>*/}
      </ul>
    );

    return (
      <nav id="navbar" className="nav-wrap">
        <MediaQuery query="(min-width: 1024px)">
          <Sticky hideOnBoundaryHit={false} stickyClassName="sticky-menu">
            {menu}
          </Sticky>
        </MediaQuery>
        <MediaQuery query="(max-width: 1023px)">
          {menu}
        </MediaQuery>
      </nav>
    );
  }

  menuClassName(location, isMenuItem) {
    let menuClass = "";
    if(isMenuItem) {
      menuClass="menu-item"
    }
    if(location === this.props.currentLocation.split('/')[1]) {
      menuClass+=" active"
    }
    return menuClass;
  }
}

Menu.propTypes = {
  twitch: PropTypes.arrayOf(PropTypes.object),
};


const mapStateToProps = (state) => (
  {
    isLive: state.twitch
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchIsSenyuChannelLive: () => dispatch(TwitchActionCreators.fetchIsSenyuChannelLive()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
