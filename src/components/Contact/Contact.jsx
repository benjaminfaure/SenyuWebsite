import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withNamespaces } from 'react-i18next';



import './Contact.css';

class Contact extends Component {

  render() {

    const { t } = this.props;
    let titrePage = `Senyu | ${ t('titles.contact') }`;

    const meta = <Helmet>
      <title>{ titrePage }</title>
    </Helmet>

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


export default withNamespaces('translations')(Contact);
