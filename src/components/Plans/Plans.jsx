import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';
import GenericImageDisplay from '../GenericContent/GenericImageDisplay.jsx';

import './Plans.scss';

class Plans extends Component {

  render() {

    const { t } = this.props;

    document.title = `Senyu | ${ t('titles.plans') }`

    return (
      <div className="plan">
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.plans.pageTitle')}</h1>
        </section>
        <GenericImageDisplay filePath="/images/planS7.jpg"  noDL={true} altTag="plan"/>
        <GenericPDFDisplay filePath="/plan.pdf" />
      </div>
    );
  }
}


export default withTranslation('translations')(Plans);
