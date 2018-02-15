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
import IntervenantsActionCreators from '../../actions/IntervenantsActionCreators';


import './Intervenant.css';

let intervenantId;

class Intervenant extends Component {

  componentDidMount() {
    intervenantId = this.props.match.params.intervenantId;

    if (intervenantId) {
      this.props.fetchIntervenantById(intervenantId);
    }
  }



  render() {

    const facebook = this.props.intervenant.facebook ? <h2><a href={this.props.intervenant.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a></h2> : "";
    const twitch = this.props.intervenant.twitch ? <h2><a href={this.props.intervenant.twitch} target="_blank" rel="noopener noreferrer"><FaTwitch /></a></h2> : "";
    const twitter = this.props.intervenant.twitter ? <h2><a href={this.props.intervenant.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a></h2> : "";
    const youtube = this.props.intervenant.youtube ? <h2><a href={this.props.intervenant.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a></h2> : "";
    const website = this.props.intervenant.website ? <h2><a href={this.props.intervenant.website} target="_blank" rel="noopener noreferrer"><FaWebsite /></a></h2> : "";
    const instagram = this.props.intervenant.instagram ? <h2><a href={this.props.intervenant.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a></h2> : "";

    return (
      <GenericContentItem
        title={this.props.intervenant.nom}
        image={this.props.intervenant.image}
        content={this.props.intervenant.description}
        propClass="intervenant">

        <div className="generic-content-social intervenant-social">
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

Intervenant.propTypes = {
  intervenant: PropTypes.object,
};


const mapStateToProps = (state) => (
  {
    intervenant: state.intervenants.selected,
    error: state.intervenants.error
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchIntervenantById: (id) => dispatch(IntervenantsActionCreators.fetchIntervenantById(id)),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Intervenant);
