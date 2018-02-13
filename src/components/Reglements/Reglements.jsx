import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import GenericImageDisplay from '../GenericContent/GenericImageDisplay.jsx';

import './Reglements.css';

class Reglements extends Component {

  render() {

    const meta = <Helmet>
      <title>Senyu | Règlements</title>
    </Helmet>

    return (
      <div>
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">Règlement répliques Cosplay</h1>
        </section>
        <GenericImageDisplay filePath="/images/reglement_replique_cosplay.jpg" altTag="reglement replique cosplay"/>
      </div>
    );
  }
}


export default Reglements;
