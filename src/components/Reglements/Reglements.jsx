import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';


import './Reglements.css';


class Reglements extends Component {


  render() {


    const { t } = this.props;
    let titrePage = t('content.regulation.list');

    const meta = <Helmet>
      <title>Senyu | {titrePage}</title>
    </Helmet>

    return (
      <div className="reglements">
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{titrePage}</h1>
        </section>
      <section className="reglements-links">
        <h2><Link to="/reglements/cosplay">{t('content.regulation.cosplay')}</Link></h2>
        <h2><Link to="/reglements/interieur">{t('content.regulation.interior')}</Link></h2>
      </section>
      </div>
    );
  }
}


export default translate('translations')(Reglements);
