import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { FaSearch } from 'react-icons/fa';

import './GenericListSearch.css';

class GenericListSearch extends Component {


  onFilterChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {

    const { t } = this.props;

    return (
      <div className="generic-list-search">
        <h4><FaSearch /></h4>
        <input type="search" placeholder={t("content.generic.search")} onChange={this.onFilterChange.bind(this)} />
      </div>
    );
  }
}

GenericListSearch.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default withTranslation('translations')(GenericListSearch);
