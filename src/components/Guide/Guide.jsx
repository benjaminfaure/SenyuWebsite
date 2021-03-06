import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';


import './Guide.scss';

class Guide extends Component {

  render() {

    const { t } = this.props;

    document.title = `Senyu | ${ t('titles.guide') }`

    return (
      <Fragment>
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.guide.pageTitle')}</h1>
        </section>
        <GenericPDFDisplay filePath="/guide.pdf" />
      </Fragment>
    );
  }
}


export default withTranslation('translations')(Guide);
