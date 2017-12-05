import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FaSearch from 'react-icons/lib/fa/search';

import './GenericListSearch.css';

class GenericListSearch extends Component {


  onFilterChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {


    return (
      <div className="generic-list-search">
        <h4><FaSearch /></h4>
        <input type="search" placeholder="Rechercher ..." onChange={this.onFilterChange.bind(this)} />
      </div>
    );
  }
}

GenericListSearch.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default GenericListSearch;
