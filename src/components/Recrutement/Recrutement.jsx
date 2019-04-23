import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';



import './Recrutement.scss';

class Recrutement extends Component {

  render() {

    const { t } = this.props;

    document.title = `Senyu | ${ t('titles.recruitment') }`

    return (
      <section className="recrutement-form">
        <h2>
          {t('content.recruitment.line1')}
        </h2>
        <h2>
          {t('content.recruitment.line2')}
        </h2>
        <img src="/images/contact.png" alt="mail recrutement senyu" />
        <h3>
          {t('content.recruitment.line3')}
      </h3>
      </section>
    );
  }
}


export default withTranslation('translations')(Recrutement);
