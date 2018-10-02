import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withNamespaces } from 'react-i18next';

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';


import './Cosplay.css';

class Cosplay extends Component {

  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>Senyu | {t('titles.cosplay')}</title>
    </Helmet>

    return (
      <div>
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.cosplay.pageTitle')}</h1>
        </section>
        <GenericPDFDisplay filePath="/cosplay.pdf" />
        <p className="info-inscription-cosplay">
          {t('content.cosplay.message')}
        </p>
        <p className="formulaire-inscription-cosplay">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvUVuJPq5twxyaisPLWRXXM677IhBbPgBNaS4f67dcP9utQA/viewform" target="_blank" rel="noopener noreferrer">{t('content.cosplay.formLink')}</a>
        </p>
      </div>
    );
  }
}


export default withNamespaces('translations')(Cosplay);
