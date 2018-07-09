import React, { Component } from 'react';
import { translate } from 'react-i18next';

import FaFacebook from 'react-icons/lib/fa/facebook-official';
import FaTwitch from 'react-icons/lib/fa/twitch';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaYoutube from 'react-icons/lib/fa/youtube';
import FaInstagram from 'react-icons/lib/fa/instagram';

import './Footer.css';

class Footer extends Component {
  render() {

    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <footer>
        <div className="footer-content">
          <div className="footer-content-links">
            <h5><a href="/contact" rel="noopener noreferrer">{t('footer.contact')}</a></h5>
            <h5><a href="https://drive.google.com/open?id=1XnTqZUOnckPCh-XYAFI61HWJ5pFKG4Xf" target="_blank" rel="noopener noreferrer" title={t('footer.press')}>{t('footer.press')}</a></h5>
            {/*<h5><a href="/archive" rel="noopener noreferrer">{t('footer.archive')}</a></h5>*/}
            <h5><a href="/recrutement" rel="noopener noreferrer">{t('footer.recruitment')}</a></h5>
            <h5><a href="/partenaires" rel="noopener noreferrer">{t('footer.partners')}</a></h5>
            {/*<h5><a href="/ws/inscriptions" rel="noopener noreferrer">{t('footer.registrations')}</a></h5>*/}
          </div>
          <div className="footer-social-links">
            <h2><a href="https://www.facebook.com/senyuofficiel/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></h2>
            <h2><a href="https://www.twitch.tv/senyutv" target="_blank" rel="noopener noreferrer"><FaTwitch /></a></h2>
            <h2><a href="https://twitter.com/senyuofficiel" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></h2>
            <h2><a href="https://www.instagram.com/senyuofficiel/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></h2>
            <h2><a href="https://www.youtube.com/channel/UCcQ99DuVbT5M9IC3BC1bd8g" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></h2>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-language">
            <h5><a onClick={() => changeLanguage('fr')}><span><img src="/images/FR.png" alt="FR" title="french flag"/> Français</span></a></h5>
            <h5><a onClick={() => changeLanguage('en')}><span><img src="/images/GB.png" alt="GB" title="english flag"/> English</span></a></h5>
          </div>
          <div className="footer-cc">
            <h5><span>Senyu</span>© 2017-2018 - {t('footer.allright')}</h5>
          </div>
        </div>
      </footer>
    );
  }
}


export default translate('translations')(Footer);
