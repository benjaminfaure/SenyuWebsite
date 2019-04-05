import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withTranslation } from 'react-i18next';



import './Recrutement.scss';

class Recrutement extends Component {

  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>{ `Senyu | ${ t('titles.recruitment') }` }</title>
    </Helmet>

    return (
      <section className="recrutement-form">
        {meta}
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
