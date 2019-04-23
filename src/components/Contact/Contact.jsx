import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';



import './Contact.scss';

class Contact extends Component {

  render() {

    const { t } = this.props;
    document.title = `Senyu | ${ t('titles.contact') }`;

    return (
      <section className="contact-form">
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


export default withTranslation('translations')(Contact);
