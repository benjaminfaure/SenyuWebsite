import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import { TYPE_ANIMATION } from '../../constants';

import GenericList from '../GenericContent/GenericList.jsx';
import GenericListItem from '../GenericContent/GenericListItem.jsx';
import GenericListSearch from '../GenericContent/GenericListSearch.jsx';
import GenericCategorySelector from '../GenericContent/GenericCategorySelector.jsx';
import AnimationsActionCreators from '../../actions/AnimationsActionCreators';


import './Animations.css';


class Animations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputFilter: '',
      selectedCategory: ''
    };
  }

  componentDidMount() {
    this.props.fetchSenyuAnimations();
  }

  render() {

    const { t } = this.props;
    let animationsList = this.filteredSenyuAnimations().map((animation) => {
      return <GenericListItem key={animation.id}
        id={animation.id}
        link={`/animations/${animation.id}`}
        propClass="animation-list-item"
        image={animation.image}
        title={animation.nom}>
        <h5>{t(`content.generic.${animation.type}`)}</h5>

      </GenericListItem>
    });

    let searchBar = <GenericListSearch onChange={this.handleSearchInputChange.bind(this)} />;
    let categorySelect = <GenericCategorySelector
      categories={TYPE_ANIMATION}
      selectedCategory={this.state.selectedCategory}
      onChange={this.handleCategoryFilterChange.bind(this)} />


    return (
      <GenericList itemList={animationsList}
        titrePage={t("content.animation.pageTitle")}>
        {searchBar}
        {categorySelect}
      </GenericList>
    );

  }


  handleSearchInputChange(filter) {
    this.setState({ searchInputFilter: filter.toLowerCase() })
  }


  handleCategoryFilterChange(category) {
    this.setState({ selectedCategory: category })
  }

  filteredSenyuAnimations() {
    return this.props.animations
    .sort(function (a, b) { return a.nom.toLowerCase() > b.nom.toLowerCase(); })
    .filter(
      animation => animation.nom.toLowerCase().includes(this.state.searchInputFilter) &&
        animation.type.includes(this.state.selectedCategory)
    )
  }

}

Animations.propTypes = {
  animations: PropTypes.arrayOf(PropTypes.object)
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





export default withNamespaces('translations')(connect(mapStateToProps, mapDispatchToProps)(Animations));
