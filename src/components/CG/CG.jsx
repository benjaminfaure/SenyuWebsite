import React, { Component, Fragment } from 'react';
import { withTranslation  } from 'react-i18next';

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay';


import './CG.scss';

class CG extends Component {

  render() {

    const { t } = this.props;


    document.title = `Senyu | ${ t('titles.cg') }`

    return (
      <Fragment>
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.cg.pageTitle')}</h1>
        </section>
        <GenericPDFDisplay filePath="/CG.pdf" />
      </Fragment>
    );
  }
}


export default withTranslation('translations')(CG);
