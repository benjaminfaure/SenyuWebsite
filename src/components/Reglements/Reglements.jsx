import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import GenericImageDisplay from '../GenericContent/GenericImageDisplay.jsx';

import './Reglements.css';


class Reglements extends Component {


  render() {

    let titrePage = 'Liste des Règlements';

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
        <h2><Link to="/reglements/cosplay">Règlement répliques cosplay</Link></h2>
        <h2><Link to="/reglements/interieur">Règlement Intérieur</Link></h2>
      </section>
      </div>
    );
  }
}


export default Reglements;
