import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import GenericImageDisplay from '../GenericContent/GenericImageDisplay.jsx';
import GenericPDFDisplay from '../GenericContent/GenericPDFDisplay.jsx';

import './Reglement.scss';

const initialState = {
  reglementType: null
}
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

    const { t } = this.props;

    let titrePage = t('content.regulation.none');

    switch (this.state.reglementType) {
      case "cosplay":
        titrePage = t('content.regulation.cosplay');
        contenuPage = <GenericImageDisplay filePath="/images/reglement_replique_cosplay.jpg"  noDL={false} altTag="reglement replique cosplay" />;
        break;
      case "interieur":
        titrePage = t('content.regulation.interior');
        contenuPage = <GenericPDFDisplay filePath="/reglement_interieur.pdf" />;
        break;
      default:
        break;
    }

    document.title = `Senyu | ${ titrePage }`

    return (
      <div className="reglements">
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


export default withTranslation('translations')(Reglement);
