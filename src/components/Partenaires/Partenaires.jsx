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
            <a href="#">
              <img className="partenaire-item-image" src="/images/logo_mobile.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="#">
              <img className="partenaire-item-image" src="http://epinal-evolution.e-monsite.com/medias/images/logo-epinal.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="#">
              <img className="partenaire-item-image" src="https://upload.wikimedia.org/wikipedia/fr/thumb/a/a6/Cr%C3%A9dit_Agricole.svg/800px-Cr%C3%A9dit_Agricole.svg.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="#">
              <img className="partenaire-item-image" src="/images/logo_mobile.png" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="#">
              <img className="partenaire-item-image" src="https://www.agendatickets.com/wp-content/uploads/2016/12/Centre-des-Congr%C3%A8s-dEpinal.jpg" alt="logo" />
            </a>
          </article>
          <article className="partenaire-item generic-content-list-item">
            <a href="#">
              <img className="partenaire-item-image" src="https://www.agendatickets.com/wp-content/uploads/2016/12/Centre-des-Congr%C3%A8s-dEpinal.jpg" alt="logo" />
            </a>
          </article>
        </div>
      </div>
    );
  }
}


export default Partenaires;
