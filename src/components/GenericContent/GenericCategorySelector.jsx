import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './GenericCategorySelector.css';
import FaCircleO from 'react-icons/lib/fa/circle-o';
import FaCheckCircleO from 'react-icons/lib/fa/check-circle-o';

class GenericCategorySelector extends Component {


  onRadioChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {

    let categories = this.props.categories.map((category) =>
    <div key={category.code}>
      <input type="radio" name="category" id={category.code} value={category.code}
        checked={this.props.selectedCategory === category.code}
        onChange={this.onRadioChange.bind(this)}/>
      <label htmlFor={category.code}>
        <FaCircleO className="generic-category-radio"/>
        <FaCheckCircleO className="generic-category-radio-checked"/>
        {category.label}
      </label>
      </div>
    );

    categories.push(
      <div key="tous">
        <input type="radio" name="category" id="all" value=""
          checked={this.props.selectedCategory === ""}
          onChange={this.onRadioChange.bind(this)}/>
        <label htmlFor="all">
          <FaCircleO className="generic-category-radio"/>
          <FaCheckCircleO className="generic-category-radio-checked"/>
          Tous
        </label>
        </div>
      );

      return (
        <div className="generic-category-selector">
          {categories}
        </div>
      );
    }
  }

  GenericCategorySelector.propTypes = {
    onChange: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string
  };

  export default GenericCategorySelector;
