import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import GenericImageDisplay from '../GenericContent/GenericImageDisplay.jsx';

import './Plans.css';

class Plans extends Component {

  render() {

    const meta = <Helmet>
      <title>Senyu | Plans</title>
    </Helmet>

    return (
      <div className="plan">
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">Plans</h1>
        </section>
        <GenericImageDisplay filePath="/images/plan.png" altTag="plan"/>
      </div>
    );
  }
}


export default Plans;
