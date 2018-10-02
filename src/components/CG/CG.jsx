import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withNamespaces } from 'react-i18next';

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay';


import './CG.css';

class CG extends Component {

  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>Senyu | {t('titles.CG')}</title>
    </Helmet>

    return (
      <div>
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.cg.pageTitle')}</h1>
        </section>
        <GenericPDFDisplay filePath="/CG.pdf" />
      </div>
    );
  }
}


export default withNamespaces('translations')(CG);
