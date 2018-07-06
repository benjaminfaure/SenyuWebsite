import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { translate } from 'react-i18next';

import FaEmpire from 'react-icons/lib/fa/empire';

import './EnTravaux.css';


class EnTravaux extends Component {




  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>Senyu | {t('titles.workInProgress')}</title>
    </Helmet>
    return (
      <section className="work-in-progress">
        {meta}
        <h2>
          {t('content.workInProgress.pageTitle')}
        </h2>
        <h1 >
          <FaEmpire />
        </h1>
        <h2>
          {t('content.workInProgress.message')}
        </h2>
      </section>
    );

  }




}


export default translate('translations')(EnTravaux);
