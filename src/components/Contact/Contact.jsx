import React, { Component } from 'react';
import { Helmet } from "react-helmet";



import './Contact.css';

class Contact extends Component {

  render() {

    const meta = <Helmet>
      <title>Senyu | Contact</title>
    </Helmet>

    return (
      <section className="contact-form">
        {meta}
        <h2>
          Le formulaire de contact est en cours de création.
        </h2>
        <h2>
          En attendant sa mise en ligne, vous pouvez nous contacter à l'adresse suivante :
        </h2>
        <img src="/images/contact.png" alt="mail contact senyu" />
        <h3>
          (c'est une image)
      </h3>
      </section>
    );
  }
}


export default Contact;
