import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import { FaTrophy } from 'react-icons/fa';

import './NotFound.scss';


class NotFound extends Component {


  render() {

    const { t } = this.props;

    document.title = `Senyu | ${ t('titles.404') }`

    return (
      <section className="not-found">
        <h2>
          {t('content.404.line1')}
        </h2>
        <h1 >
          <FaTrophy />
        </h1>
        <h2>
          {t('content.404.line2')}
        </h2>
        <h5>
          {t('content.404.line3')}
        </h5>
      </section>
    );

  }




}


export default withTranslation('translations')(NotFound);
