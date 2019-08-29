import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import { FaFacebook, FaTwitter, FaTwitch, FaYoutube, FaInstagram } from 'react-icons/fa';


import './Footer.scss';

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
            <h5><a href="/inscription" rel="noopener noreferrer">{t('footer.registration')}</a></h5>
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
            <h5><a href="#" onClick={() => changeLanguage('fr')}><span><img src="/images/FR.png" alt="FR" title="french flag"/> Français</span></a></h5>
            <h5><a href="#" onClick={() => changeLanguage('en')}><span><img src="/images/GB.png" alt="GB" title="english flag"/> English</span></a></h5>
          </div>
          <div className="footer-cc">
            <h5><span>Senyu</span>© 2017-2019 - {t('footer.allright')}</h5>
          </div>
        </div>
      </footer>
    );
  }
}


export default withTranslation('translations')(Footer);
