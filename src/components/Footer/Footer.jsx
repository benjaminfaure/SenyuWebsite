import React, { Component } from 'react';

import FaFacebook from 'react-icons/lib/fa/facebook-official';
import FaTwitch from 'react-icons/lib/fa/twitch';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaYoutube from 'react-icons/lib/fa/youtube';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
          <h6><span>Senyu</span>© 2017 - tous droits réservés</h6>
        </div>
        <div className="footer-social-links">
          <h2><a href="https://www.facebook.com/senyuofficiel/" target="_blank" rel="noopener noreferrer"><FaFacebook/></a></h2>
          <h2><a href="https://www.twitch.tv/senyutv" target="_blank" rel="noopener noreferrer"><FaTwitch /></a></h2>
          <h2><a href="https://twitter.com/senyuofficiel" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></h2>
          <h2><a href="https://www.youtube.com/channel/UCcQ99DuVbT5M9IC3BC1bd8g" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></h2>
        </div>
      </footer>
    );
  }
}


export default Footer;
