import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import { FaEmpire } from 'react-icons/fa';

import './EnTravaux.scss';


class EnTravaux extends Component {




  render() {

    const { t } = this.props;

    document.title = `Senyu | ${ t('titles.workInProgress') }`

    return (
      <section className="work-in-progress">
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


export default withTranslation('translations')(EnTravaux);
