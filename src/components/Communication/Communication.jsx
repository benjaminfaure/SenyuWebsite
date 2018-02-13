import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';


import './Communication.css';

class Communication extends Component {

  render() {

    const meta = <Helmet>
      <title>Senyu | Communication</title>
    </Helmet>

    return (
      <div>
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">Communication sur la sélection des Créateurs</h1>
        </section>
        <GenericPDFDisplay filePath="/communication_selection_createurs.pdf" />
      </div>
    );
  }
}


export default Communication;
