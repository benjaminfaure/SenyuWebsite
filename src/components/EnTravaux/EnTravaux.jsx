import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import FaEmpire from 'react-icons/lib/fa/empire';

import './EnTravaux.css';


class EnTravaux extends Component {




  render() {
    const meta = {
      title: `Senyu | En travaux`,
    };

    return (
      <section className="work-in-progress">
      <DocumentMeta {...meta} />
        <h2>
          En travaux
          </h2>
        <h1 >
          <FaEmpire />
        </h1>
        <h2>
          Rejoins l'Empire et participe à la construction de l'Etoile de la Mort
          </h2>
      </section>
    );

  }




}


export default EnTravaux;
