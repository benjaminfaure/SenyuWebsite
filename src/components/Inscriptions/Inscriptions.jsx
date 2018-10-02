import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withNamespaces } from 'react-i18next';

import './Inscriptions.css';

class Inscriptions extends Component {



  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>Senyu | {t('titles.registration')}</title>
    </Helmet>


    return (
      <div className="inscriptions">
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.registration.pageTitle')}</h1>
        </section>

        <section className="generic-content-list">
          {/*<article className="generic-content-list-item">
            <a href="/inscription/animation" rel="noopener noreferrer">
              <h4>{t('content.registration.animation.pageTitle')}</h4>
            </a>
          </article>*/}
          <article className="generic-content-list-item">
            <a href="/inscription/createur" rel="noopener noreferrer">
              <h4>{t('content.registration.createur.pageTitle')}</h4>
            </a>
          </article>
          {/*<article className="generic-content-list-item">
            <a href="/inscription/invite" rel="noopener noreferrer">
              <h4>{t('content.registration.invite.pageTitle')}</h4>
            </a>
          </article>*/}
          <article className="generic-content-list-item">
            <a href="/inscription/boutique" rel="noopener noreferrer">
              <h4>{t('content.registration.boutique.pageTitle')}</h4>
            </a>
          </article>
        </section>
      </div>
    );

  }

}


export default withNamespaces('translations')(Inscriptions);
