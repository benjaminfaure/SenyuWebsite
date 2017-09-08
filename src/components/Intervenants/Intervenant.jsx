import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import FaFacebook from 'react-icons/lib/fa/facebook-official';
import FaTwitch from 'react-icons/lib/fa/twitch';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaYoutube from 'react-icons/lib/fa/youtube';
import FaWebsite from 'react-icons/lib/fa/external-link';

import GenericContentItem from '../GenericContent/GenericContentItem.jsx';
import IntervenantsActionCreators from '../../actions/IntervenantsActionCreators';


import './Intervenant.css';

let intervenantId ;

class Intervenant extends Component {

  componentDidMount(){
    intervenantId = this.props.match.params.intervenantId;

    if(intervenantId) {
      this.props.fetchIntervenantById(intervenantId);
    }
  }



  render() {

    console.log(JSON.stringify(this.state));

    return (
      <GenericContentItem title={this.props.intervenant.nom}>
      </GenericContentItem>
    );
  }
}

Intervenant.propTypes = {
  intervenant: PropTypes.object,
};


const mapStateToProps = (state) => (
  {
    intervenant: state.intervenantsReducer
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchIntervenantById: (id) => dispatch(IntervenantsActionCreators.fetchIntervenantById(id)),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Intervenant);
