import React, { Component } from 'react';

import FaEmpire from 'react-icons/lib/fa/empire';

import './EnTravaux.css';


class EnTravaux extends Component {




  render() {


    return (
      <section className="work-in-progress">
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
