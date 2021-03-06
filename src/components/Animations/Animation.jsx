import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { FaFacebook, FaTwitter, FaTwitch, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

import GenericContentItem from '../GenericContent/GenericContentItem.jsx';
import AnimationsActionCreators from '../../actions/AnimationsActionCreators';


import './Animation.scss';

let animationId;

class Animation extends Component {

  componentDidMount() {
    animationId = this.props.match.params.animationId;

    if (animationId) {
      this.props.fetchSenyuAnimationById(animationId);
    }
  }

  render() {

    const facebook = this.props.animation.facebook ? <h2><a href={this.props.animation.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a></h2> : "";
    const twitch = this.props.animation.twitch ? <h2><a href={this.props.animation.twitch} target="_blank" rel="noopener noreferrer"><FaTwitch /></a></h2> : "";
    const twitter = this.props.animation.twitter ? <h2><a href={this.props.animation.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a></h2> : "";
    const youtube = this.props.animation.youtube ? <h2><a href={this.props.animation.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a></h2> : "";
    const website = this.props.animation.website ? <h2><a href={this.props.animation.website} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a></h2> : "";

    return (
      <GenericContentItem
        title={this.props.animation.nom}
        image={this.props.animation.image}
        content={this.props.animation.description}
        type={this.props.animation.type}
        propClass="animation">

        <div className="generic-content-social animation-social">
          {facebook}
          {twitch}
          {twitter}
          {youtube}
          {website}
        </div>
      </GenericContentItem>
    );
  }
}

Animation.propTypes = {
  animation: PropTypes.object
};


const mapStateToProps = (state) => (
  {
    animation: state.animations.selected
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchSenyuAnimationById: (id) => dispatch(AnimationsActionCreators.fetchSenyuAnimationById(id)),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Animation);
