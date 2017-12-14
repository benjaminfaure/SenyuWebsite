import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import FaTrophy from 'react-icons/lib/fa/trophy';

import './NotFound.css';


class NotFound extends Component {


  render() {

    const meta = <Helmet>
      <title>Senyu | Four oh Four !</title>
    </Helmet>
    return (
      <section className="not-found">
        {meta}
        <h2>
          Achievement Unlocked
          </h2>
        <h1 >
          <FaTrophy />
        </h1>
        <h2>
          Trouver une page qui n'existe pas.
          </h2>
        <h5>
          404
          </h5>
      </section>
    );

  }




}


export default NotFound;
