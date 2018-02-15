import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { TYPE_EXPOSANT } from '../../constants';

import GenericList from '../GenericContent/GenericList.jsx';
import GenericListItem from '../GenericContent/GenericListItem.jsx';
import GenericListSearch from '../GenericContent/GenericListSearch.jsx';
import GenericCategorySelector from '../GenericContent/GenericCategorySelector.jsx';
import ExposantsActionCreators from '../../actions/ExposantsActionCreators';

import './Exposants.css';


let exposantsType;
class Exposants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputFilter: '',
      selectedCategory: ''
    };
  }


  componentDidMount() {
    exposantsType = this.props.match.params.exposantsType;
    this.props.fetchExposants();
  }


  render() {

    let titrePage = exposantsType ? "Liste des ".concat(TYPE_EXPOSANT[exposantsType.toUpperCase()]) : "Liste des Exposants";

    let exposantsList = this.filteredExposants().map((exposant) => {
      return <GenericListItem key={exposant.id}
        id={exposant.id}
        link={`/exposants/${exposant.id}`}
        propClass="exposant-list-item"
        image={exposant.image}
        title={exposant.nom}>
        <h5>{exposant.type}</h5>
      </GenericListItem>
    });

    let searchBar = <GenericListSearch onChange={this.handleSearchInputChange.bind(this)} />;
    let categorySelect = <GenericCategorySelector
      categories={TYPE_EXPOSANT}
      selectedCategory={this.state.selectedCategory}
      onChange={this.handleCategoryFilterChange.bind(this)} />



    return (
      <GenericList itemList={exposantsList}
        titrePage={titrePage}>
        {searchBar}
        {exposantsType ? '' : categorySelect}
      </GenericList>
    );

  }


  handleSearchInputChange(filter) {
    this.setState({ searchInputFilter: filter.toLowerCase() })
  }

  handleCategoryFilterChange(category) {
    this.setState({ selectedCategory: category })
  }



  filteredExposants() {
    return this.props.exposants
    .sort(function (a, b) { return a.nom.toLowerCase() > b.nom.toLowerCase(); })
    .filter(
      exposant => exposant.nom.toLowerCase().includes(this.state.searchInputFilter) &&
        exposant.type.includes(this.state.selectedCategory)
    )
  }

}

Exposants.propTypes = {
  exposants: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => (
  {
    exposants: state.exposants.list,
    error: state.exposants.error
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchExposants: () => dispatch(ExposantsActionCreators.fetchExposants()),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Exposants);
