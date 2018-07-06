import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { translate } from 'react-i18next';

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';


import './Communication.css';

class Communication extends Component {

  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>Senyu | {t('titles.communication')}</title>
    </Helmet>

    return (
      <div>
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.communication.pageTitle')}</h1>
        </section>
        <GenericPDFDisplay filePath="/communication_selection_createurs.pdf" />
      </div>
    );
  }
}


export default translate('translations')(Communication);
