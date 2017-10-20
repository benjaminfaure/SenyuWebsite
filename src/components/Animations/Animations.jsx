import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {TYPE_ANIMATION} from '../../constants';

import GenericList from '../GenericContent/GenericList.jsx';
import GenericListItem from '../GenericContent/GenericListItem.jsx';
import GenericListSearch from '../GenericContent/GenericListSearch.jsx';
import GenericCategorySelector from '../GenericContent/GenericCategorySelector.jsx';
import AnimationsActionCreators from '../../actions/AnimationsActionCreators';

import './Animations.css';

let animationsType;
class Animations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputFilter: '',
      selectedCategory: ''
    };
  }

  componentDidMount(){
    animationsType = this.props.match.params.animationsType;

    this.props.fetchSenyuAnimations();
  }

  render() {

    let animationsList = this.filteredSenyuAnimations().map((animation) => {
      return <GenericListItem key={animation.id}
        id={animation.id}
        link={`/animations/senyu/${animation.id}`}
        propClass="animation-list-item"
        image={animation.image}
        title={animation.nom}>
      </GenericListItem>
    });

    let searchBar = <GenericListSearch onChange={this.handleSearchInputChange.bind(this)}/> ;
    let categorySelect = <GenericCategorySelector
      categories={TYPE_ANIMATION}
      selectedCategory={this.state.selectedCategory}
      onChange={this.handleCategoryFilterChange.bind(this)}/>


    return(
      <GenericList itemList = {animationsList}
        titrePage="Liste des Animations Senyu">
        {searchBar}
        {categorySelect}
      </GenericList>
    );

  }


  handleSearchInputChange(filter) {
    this.setState({searchInputFilter: filter.toLowerCase()})
  }


  handleCategoryFilterChange(category) {
    this.setState({selectedCategory: category})
  }

  filteredSenyuAnimations() {
    return this.props.animations.filter(
      animation => animation.nom.toLowerCase().includes(this.state.searchInputFilter) &&
      animation.type.includes(this.state.selectedCategory)
    )
  }

}

Animations.propTypes = {
  animations: PropTypes.arrayOf(PropTypes.object),
};


const mapStateToProps = (state) => (
  {
    animations: state.animations.list
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchSenyuAnimations: () => dispatch(AnimationsActionCreators.fetchSenyuAnimations()),
  }
);





export default connect(mapStateToProps, mapDispatchToProps)(Animations);
