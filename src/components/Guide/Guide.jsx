import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withNamespaces } from 'react-i18next';

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';


import './Guide.css';

class Guide extends Component {

  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>Senyu | {t('titles.guide')}</title>
    </Helmet>

    return (
      <div>
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.guide.pageTitle')}</h1>
        </section>
        <GenericPDFDisplay filePath="/guide.pdf" />
      </div>
    );
  }
}


export default withNamespaces('translations')(Guide);
