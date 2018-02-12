import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';


import './Cosplay.css';

class Cosplay extends Component {

  render() {

    const meta = <Helmet>
      <title>Senyu | Cosplay</title>
    </Helmet>

    return (
      <div>
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">Règlement Cosplay</h1>
        </section>
        <GenericPDFDisplay filePath="/cosplay.pdf" />
        <p className="formulaire-inscription-cosplay">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvUVuJPq5twxyaisPLWRXXM677IhBbPgBNaS4f67dcP9utQA/viewform" target="_blank" rel="noopener noreferrer">Formulaire d'inscription</a>
        </p>
      </div>
    );
  }
}


export default Cosplay;
