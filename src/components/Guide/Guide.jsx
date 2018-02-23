import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';


import './Guide.css';

class Guide extends Component {

  render() {

    const meta = <Helmet>
      <title>Senyu | Guide du visiteur</title>
    </Helmet>

    return (
      <div>
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">Guide du visiteur</h1>
        </section>
        <GenericPDFDisplay filePath="/guide.pdf" />
      </div>
    );
  }
}


export default Guide;
