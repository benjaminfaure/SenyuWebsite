import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import GenericImageDisplay from '../GenericContent/GenericImageDisplay.jsx';

import './Planning.css';

class Planning extends Component {

  render() {

    const meta = <Helmet>
      <title>Senyu | Planning</title>
    </Helmet>

    return (
      <div className="planning">
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">Planning</h1>
        </section>
        <GenericImageDisplay filePath="/images/planning.png" altTag="planning"/>
      </div>
    );
  }
}


export default Planning;
