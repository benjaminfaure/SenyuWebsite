import React, { Component } from 'react';
import { Helmet } from "react-helmet";



import './Recrutement.css';

class Recrutement extends Component {

  render() {

    const meta = <Helmet>
      <title>Senyu | Recrutement</title>
    </Helmet>

    return (
      <section className="recrutement-form">
        {meta}
        <h2>
          Le formulaire de recrutement est en cours de création.
        </h2>
        <h2>
          En attendant sa mise en ligne, vous pouvez nous contacter à l'adresse suivante :
        </h2>
        <img src="/images/contact.png" alt="mail recrutement senyu" />
        <h3>
          (c'est une image)
      </h3>
      </section>
    );
  }
}


export default Recrutement;
