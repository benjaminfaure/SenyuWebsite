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
        <GenericPDFDisplay filePath="/cosplay.pdf" />
        <p class="formulaire-inscription-cosplay">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvUVuJPq5twxyaisPLWRXXM677IhBbPgBNaS4f67dcP9utQA/viewform">Formulaire d'inscription</a>
        </p>
      </div>
    );
  }
}


export default Cosplay;
