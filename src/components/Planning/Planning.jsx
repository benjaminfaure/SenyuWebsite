import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import GenericImageDisplay from '../GenericContent/GenericImageDisplay.jsx';

import './Planning.scss';

class Planning extends Component {

  render() {

    const { t } = this.props;

    document.title = `Senyu | ${ t('titles.planning') }`

    return (
      <div className="planning">
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.planning.pageTitle')}</h1>
        </section>
        <GenericImageDisplay filePath="/images/planningS7.png" noDL={false} altTag="planning"/>
      </div>
    );
  }
}


export default withTranslation('translations')(Planning);
