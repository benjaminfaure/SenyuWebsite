import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withNamespaces } from 'react-i18next';

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';

import './Plans.css';

class Plans extends Component {

  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>{ `Senyu | ${ t('titles.plans') }` }</title>
    </Helmet>

    return (
      <div className="plan">
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.plans.pageTitle')}</h1>
        </section>
        <GenericPDFDisplay filePath="/plan.pdf" />
      </div>
    );
  }
}


export default withNamespaces('translations')(Plans);
