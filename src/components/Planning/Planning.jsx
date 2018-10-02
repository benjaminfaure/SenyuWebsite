import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withNamespaces } from 'react-i18next';

import GenericImageDisplay from '../GenericContent/GenericImageDisplay.jsx';

import './Planning.css';

class Planning extends Component {

  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>Senyu | {t('titles.planning')}</title>
    </Helmet>

    return (
      <div className="planning">
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.planning.pageTitle')}</h1>
        </section>
        <GenericImageDisplay filePath="/images/planning.png" altTag="planning"/>
      </div>
    );
  }
}


export default withNamespaces('translations')(Planning);
