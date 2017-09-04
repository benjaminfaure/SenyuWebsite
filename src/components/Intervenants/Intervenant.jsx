import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentSingle from '../Content/ContentSingle.jsx';

import './Intervenant.css';

class Intervenant extends Component {
  render() {
    return (
      <ContentSingle title={this.props.nom}
                     content={this.props.description}
                     image={this.props.image}>
        <div className="intervenant-social">Intervenant</div>
      </ContentSingle>

    );
  }
}

Intervenant.propTypes = {
  id: PropTypes.number,
  nom: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  youtube: PropTypes.string,
  website: PropTypes.string,
  twitch: PropTypes.string,
};


export default Intervenant;
