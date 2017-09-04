import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContentList from '../Content/ContentList.jsx';
import Intervenant from './Intervenant.jsx';
import IntervenantsActionCreators from '../../actions/IntervenantsActionCreators';

import './Intervenants.css';

class Intervenants extends Component {

  componentDidMount(){
    this.props.fetchIntervenants();
  }


  render() {

    let intervenantsList = this.props.intervenants.map((intervenant) => {
            return <Intervenant key={intervenant.id}
                                {...intervenant}/>
        });


    return(
      <ContentList itemList = {intervenantsList}> </ContentList>
    );

  }
}

Intervenants.propTypes = {
  intervenants: PropTypes.arrayOf(PropTypes.object),
};


const mapStateToProps = (state) => (
  {
    intervenants: state.intervenants
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchIntervenants: () => dispatch(IntervenantsActionCreators.fetchIntervenants()),
  }
);



export default connect(mapStateToProps, mapDispatchToProps)(Intervenants);
