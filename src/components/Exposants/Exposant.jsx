import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import FaFacebook from 'react-icons/lib/fa/facebook-official';
import FaTwitch from 'react-icons/lib/fa/twitch';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaYoutube from 'react-icons/lib/fa/youtube';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaWebsite from 'react-icons/lib/fa/external-link';

import GenericContentItem from '../GenericContent/GenericContentItem.jsx';
import ExposantsActionCreators from '../../actions/ExposantsActionCreators';


import './Exposant.css';

let exposantId;

class Exposant extends Component {

  componentDidMount() {
    exposantId = this.props.match.params.exposantId;

    if (exposantId) {
      this.props.fetchExposantById(exposantId);
    }
  }

  render() {

    const facebook = this.props.exposant.facebook ? <h2><a href={this.props.exposant.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a></h2> : "";
    const twitch = this.props.exposant.twitch ? <h2><a href={this.props.exposant.twitch} target="_blank" rel="noopener noreferrer"><FaTwitch /></a></h2> : "";
    const twitter = this.props.exposant.twitter ? <h2><a href={this.props.exposant.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a></h2> : "";
    const youtube = this.props.exposant.youtube ? <h2><a href={this.props.exposant.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a></h2> : "";
    const website = this.props.exposant.website ? <h2><a href={this.props.exposant.website} target="_blank" rel="noopener noreferrer"><FaWebsite /></a></h2> : "";
    const instagram = this.props.exposant.instagram ? <h2><a href={this.props.exposant.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a></h2> : "";

    return (
      <GenericContentItem
        title={this.props.exposant.nom}
        image={this.props.exposant.image}
        content={this.props.exposant.description}
        propClass="exposant">

        <div className="generic-content-social exposant-social">
          {facebook}
          {twitch}
          {twitter}
          {youtube}
          {website}
          {instagram}
        </div>
      </GenericContentItem>
    );
  }
}

Exposant.propTypes = {
  exposant: PropTypes.object,
};


const mapStateToProps = (state) => (
  {
    exposant: state.exposants.selected
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchExposantById: (id) => dispatch(ExposantsActionCreators.fetchExposantById(id)),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Exposant);
