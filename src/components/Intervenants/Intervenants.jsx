import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GenericList from '../GenericContent/GenericList.jsx';
import GenericListItem from '../GenericContent/GenericListItem.jsx';
import GenericListSearch from '../GenericContent/GenericListSearch.jsx';
import IntervenantsActionCreators from '../../actions/IntervenantsActionCreators';

import './Intervenants.css';

class Intervenants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputFilter: ''
    };
  }


  componentDidMount() {
    this.props.fetchIntervenants();
    console.log(this.props.error);
  }


  render() {

    let intervenantsList = this.filteredIntervenants().map((intervenant) => {
      return <GenericListItem key={intervenant.id}
        id={intervenant.id}
        link={`/invites/${intervenant.id}`}
        propClass="intervenant-list-item"
        image={intervenant.image}
        title={intervenant.nom}>
      </GenericListItem>
    });
    console.log(this.props.error);

    let searchBar = <GenericListSearch onChange={this.handleSearchInputChange.bind(this)} />;


    return (
      <GenericList itemList={intervenantsList}
        titrePage="Liste des Intervenants">
        {searchBar}
      </GenericList>
    );

  }


  handleSearchInputChange(filter) {
    this.setState({ searchInputFilter: filter.toLowerCase() })
  }

  filteredIntervenants() {
    return this.props.intervenants
    .sort(function (a, b) { return a.nom.toLowerCase() > b.nom.toLowerCase(); })
    .filter(
      intervenant => intervenant.nom.toLowerCase().includes(this.state.searchInputFilter)
    )
  }
}

Intervenants.propTypes = {
  intervenants: PropTypes.arrayOf(PropTypes.object),
};


const mapStateToProps = (state) => (
  {
    intervenants: state.intervenants.list,
    error: state.intervenants.error
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchIntervenants: () => dispatch(IntervenantsActionCreators.fetchIntervenants()),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Intervenants);
