import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import './Redirect.css';


class Redirect extends Component {

  componentWillMount() {
    let typeInscription = this.props.match.params.typeInscription;

    if (typeInscription) {
      window.location = `https://inscriptions.senyu.fr/${typeInscription}`;
    } else {
      window.location = `https://inscriptions.senyu.fr/`;
    }

  }

  render() {

    const meta = <Helmet>
      <title>Senyu | Redirection ...</title>
    </Helmet>
    return (
      <section className="redirect">
        {meta}
        <h2>
          Redirection...
          </h2>
      </section>
    );

  }




}


export default Redirect;
