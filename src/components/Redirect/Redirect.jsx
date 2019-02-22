import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withTranslation } from 'react-i18next';

import './Redirect.css';


class Redirect extends Component {

  componentWillMount() {
    let typeInscription = this.props.match.params.typeInscription;

    if (typeInscription) {
      window.location = `https://inscriptions.senyu.fr/${typeInscription}`;
    } else {
      window.location = `https://inscriptions.senyu.fr/`;
    }

  }

  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>{ `Senyu | ${ t('titles.redirect') }` }</title>
    </Helmet>
    return (
      <section className="redirect">
        {meta}
        <h2>
          {t('content.redirect')}
        </h2>
      </section>
    );

  }




}


export default withTranslation('translations')(Redirect);
