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
        <GenericPDFDisplay filePath="/cosplay.pdf" />
      </div>
    );
  }
}


export default Cosplay;
