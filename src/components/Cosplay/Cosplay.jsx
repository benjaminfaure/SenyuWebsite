import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';


import './Cosplay.scss';

class Cosplay extends Component {

  render() {

    const { t } = this.props;

    document.title = `Senyu | ${ t('titles.cosplay') }`

    return (
      <Fragment>
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.cosplay.pageTitle')}</h1>
        </section>
        <GenericPDFDisplay filePath="/cosplay.pdf" />
        <p className="info-inscription-cosplay">
          {/*t('content.cosplay.message')*/}
        </p>
        <p className="formulaire-inscription-cosplay">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5J6qk0mJly7ZR8wLLhQfX4OJPPnn_Xq-B3OgAy01gbC7M1w/viewform" target="_blank" rel="noopener noreferrer">{t('content.cosplay.formLink')}</a>
        </p>
      </Fragment>
    );
  }
}


export default withTranslation('translations')(Cosplay);
