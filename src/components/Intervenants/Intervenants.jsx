import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GenericList from '../GenericContent/GenericList.jsx';
import GenericListItem from '../GenericContent/GenericListItem.jsx';
import IntervenantsActionCreators from '../../actions/IntervenantsActionCreators';

import './Intervenants.css';

class Intervenants extends Component {

  componentDidMount(){
    this.props.fetchIntervenants();
  }


  render() {

    let intervenantsList = this.props.intervenants.map((intervenant) => {
            return <GenericListItem key={intervenant.id}
                id={intervenant.id}
                link={`/intervenant/${intervenant.id}`}
                propClass="intervenant-list-item"
                image={intervenant.image}
                title={intervenant.nom}>
            </GenericListItem>
        });

    return(
      <GenericList itemList = {intervenantsList}
          titrePage="Liste des Intervenants">
       </GenericList>
    );

  }
}

Intervenants.propTypes = {
  intervenants: PropTypes.arrayOf(PropTypes.object),
};


const mapStateToProps = (state) => (
  {
    intervenants: state.intervenants.list
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchIntervenants: () => dispatch(IntervenantsActionCreators.fetchIntervenants()),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Intervenants);
