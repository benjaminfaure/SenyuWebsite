import React, { Component } from 'react';
import { Helmet } from "react-helmet";



import './Partenaires.css';

class Partenaires extends Component {

  render() {

    const meta = <Helmet>
      <title>Senyu | Partenaires</title>
    </Helmet>

    return (
      <div className="partenaires">
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">Partenaires</h1>
        </section>
        <div className="partenaires-list generic-content-list">
          <article className="partenaire-item generic-content-list-item">
            <a href="http://www.epinal.fr/">
              <img className="partenaire-item-image" src="/images/logos/epinal.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="http://emmaus-france.org/">
              <img className="partenaire-item-image" src="/images/logos/emmaus.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.ca-lorraine.fr/">
              <img className="partenaire-item-image" src="/images/logos/credit_agricole.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.congres-epinal.com/">
              <img className="partenaire-item-image" src="/images/logos/centre_congres.jpg" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.facebook.com/BandidoCompagnie/">
              <img className="partenaire-item-image" src="/images/logos/bandido.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="https://www.geekmemore.com/">
              <img className="partenaire-item-image" src="/images/logos/geekmemore.png" alt="logo" />
            </a>
          </article>
        </div>
      </div>
    );
  }
}


export default Partenaires;
