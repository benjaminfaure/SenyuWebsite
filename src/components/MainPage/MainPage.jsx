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
        </article>
        <article>
          <MainPageMap />
        </article>
      </section >
    );
  }
}




export default withNamespaces('translations')(MainPage);
