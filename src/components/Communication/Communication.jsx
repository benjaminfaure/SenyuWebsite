import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';


import './Communication.css';

class Cosplay extends Component {

  render() {

    const meta = <Helmet>
      <title>Senyu | Communication</title>
    </Helmet>

    return (
      <div>
        {meta}
        <GenericPDFDisplay filePath="/communication_selection_createurs.pdf" />
      </div>
    );
  }
}


export default Cosplay;
