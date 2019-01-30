import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withNamespaces } from 'react-i18next';



import './Partenaires.css';

class Partenaires extends Component {

  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>{ `Senyu | ${ t('titles.partners') }` }</title>
    </Helmet>

    return (
      <div className="partenaires">
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.partners.pageTitle')}</h1>
        </section>
        <div className="partenaires-list generic-content-list">
          <article className="partenaire-item generic-content-list-item">
            <a href="http://www.epinal.fr/" target="_blank" rel="noopener noreferrer">
              <img className="partenaire-item-image" src="/images/logos/epinal.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="http://emmaus-france.org/" target="_blank" rel="noopener noreferrer">
              <img className="partenaire-item-image" src="/images/logos/emmaus.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.ca-lorraine.fr/" target="_blank" rel="noopener noreferrer">
              <img className="partenaire-item-image" src="/images/logos/credit_agricole.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.congres-epinal.com/" target="_blank" rel="noopener noreferrer">
              <img className="partenaire-item-image" src="/images/logos/centre_congres.jpg" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.facebook.com/BandidoCompagnie/" target="_blank" rel="noopener noreferrer">
              <img className="partenaire-item-image" src="/images/logos/bandido.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.geekmemore.com/" target="_blank" rel="noopener noreferrer">
              <img className="partenaire-item-image" src="/images/logos/geekmemore.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.francebleu.fr" target="_blank" rel="noopener noreferrer">
              <img className="partenaire-item-image" src="/images/logos/france_bleu.jpg" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.japancandybox.com/" target="_blank" rel="noopener noreferrer">
              <img className="partenaire-item-image" src="/images/logos/japan_candy_box.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.kawaiibox.com/" target="_blank" rel="noopener noreferrer">
              <img className="partenaire-item-image" src="/images/logos/kawaii_box.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="http://www.vosgesfm.fr/" target="_blank" rel="noopener noreferrer">
              <img className="partenaire-item-image" src="/images/logos/vosgesfm.jpg" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.funradio.fr/" target="_blank" rel="noopener noreferrer">
              <img className="partenaire-item-image" src="/images/logos/funradio.png" alt="logo" />
            </a>
          </article>
        </div>
      </div>
    );
  }
}


export default withNamespaces('translations')(Partenaires);
