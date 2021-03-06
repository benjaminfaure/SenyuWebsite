import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import './Redirect.scss';


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

    document.title = `Senyu | ${ t('titles.redirect') }`
    return (
      <section className="redirect">
        <h2>
          {t('content.redirect')}
        </h2>
      </section>
    );

  }




}


export default withTranslation('translations')(Redirect);
