import React, { Component } from 'react';
import { withTranslation  } from 'react-i18next';

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';


import './Communication.scss';

class Communication extends Component {

  render() {

    const { t } = this.props;

    document.title = `Senyu | ${ t('titles.communication') }`


    return (
      <div>
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.communication.pageTitle')}</h1>
        </section>
        <GenericPDFDisplay filePath="/communication_selection_createurs.pdf" />
      </div>
    );
  }
}


export default withTranslation('translations')(Communication);
