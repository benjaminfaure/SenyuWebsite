import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

import './MainPage.css';
import MainPageMap from './MainPageMap.jsx';



class MainPage extends Component {

  render() {

    const { t } = this.props;

    return (
      <section id="main-page">
        <article>
        </article>
        <article id="main-page-message">
          <img src="/images/logo_mobile.png" alt="logo" />
          <span>{t('content.home.line1')}</span>
          <span>{t('content.home.line2')}</span>
          <span>{t('content.home.line3')}</span>
          <span><a href="https://tinyurl.com/ybbt5wvx">{t('content.home.line4')}</a></span>
        </article>
        <article>
          <MainPageMap />
        </article>
      </section >
    );
  }
}




export default withNamespaces('translations')(MainPage);
