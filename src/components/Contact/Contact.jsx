import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { translate } from 'react-i18next';



import './Contact.css';

class Contact extends Component {

  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>Senyu | {t('titles.contact')}</title>
    </Helmet>

    return (
      <section className="contact-form">
        {meta}
        <h2>
          {t('content.contact.line1')}
        </h2>
        <h2>
          {t('content.contact.line2')}
        </h2>
        <img src="/images/contact.png" alt="mail contact senyu" />
        <h3>
          {t('content.contact.line3')}
      </h3>
      </section>
    );
  }
}


export default translate('translations')(Contact);
