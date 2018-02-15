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
        <p className="info-inscription-cosplay">
          L'inscription au concours octroie une réduction sur le billet d'entrée qui correspond à 1,5€ de remise. La réduction s'applique sur le billet les  jours de participation au concours cosplay. Ainsi, si vous participez aux deux jours du concours, vous pourrez bénéficier jusqu'à 3€ de remise. Vous aurez également la possibilité d'avoir un coupe-fil en accédant directement à la convention depuis l'entrée sur le parking P4. Une vérification sera effectuée par cette entrée. Cette réduction s'appliquera par une remise lors de la validation de votre inscription au concours cosplay, dans la zone dédiée au Cosplay.
        </p>
        <p className="formulaire-inscription-cosplay">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvUVuJPq5twxyaisPLWRXXM677IhBbPgBNaS4f67dcP9utQA/viewform" target="_blank" rel="noopener noreferrer">Formulaire d'inscription</a>
        </p>
      </div>
    );
  }
}


export default Cosplay;
