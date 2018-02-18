import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import GenericImageDisplay from '../GenericContent/GenericImageDisplay.jsx';
import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';

import './Reglement.css';

const initialState = {
  reglementType: null
}
let titrePage = 'Aucun règlement trouvé';
let contenuPage;

class Reglement extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.setState({
      reglementType: this.props.match.params.reglementType
    })
  }

  render() {
    switch (this.state.reglementType) {
      case "cosplay":
        titrePage = "Règlement sur les répliques Cosplay";
        contenuPage = <GenericImageDisplay filePath="/images/reglement_replique_cosplay.jpg" altTag="reglement replique cosplay" />;
        break;
      case "interieur":
        titrePage = "Règlement intérieur";
        contenuPage = <GenericPDFDisplay filePath="/reglement_interieur.pdf" />;
        break;
      default:
        break;
    }


    const meta = <Helmet>
      <title>Senyu | {titrePage}</title>
    </Helmet>

    return (
      <div className="reglements">
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{titrePage}</h1>
        </section>
        <section className="reglements-links">
          {contenuPage}
        </section>
      </div>
    );
  }
}


export default Reglement;
