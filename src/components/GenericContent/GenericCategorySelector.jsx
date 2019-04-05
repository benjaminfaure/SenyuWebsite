import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';


import './GenericCategorySelector.scss';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';

class GenericCategorySelector extends Component {


  onRadioChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {

    const { t } = this.props;

    let categories = this.props.categories.map((category) =>
      <div key={category.code}>
        <input type="radio" name="category" id={category.code} value={category.code}
          checked={this.props.selectedCategory === category.code}
          onChange={this.onRadioChange.bind(this)} />
        <label htmlFor={category.code}>
          <FaRegCircle className="generic-category-radio" />
          <FaRegCheckCircle className="generic-category-radio-checked" />
          {t(`content.generic.${category.code}`)}
        </label>
      </div>
    );

    categories.push(
      <div key="all">
        <input type="radio" name="category" id="all" value=""
          checked={this.props.selectedCategory === ""}
          onChange={this.onRadioChange.bind(this)} />
        <label htmlFor="all">
          <FaRegCircle className="generic-category-radio" />
          <FaRegCheckCircle className="generic-category-radio-checked" />
          {t("content.generic.all")}
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

export default withTranslation('translations')(GenericCategorySelector);
