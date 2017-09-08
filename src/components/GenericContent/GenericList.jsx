import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './GenericList.css';

class GenericContentList extends Component {
  render() {

    return (
      <div>
        <section className="generic-page-header">
          <h1 className="generic-page-title">{this.props.titrePage}</h1>
        </section>
        <section className="generic-content-list">
          { this.props.itemList }
        </section>
      </div>
    );
  }
}

GenericContentList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object),
  titrePage: PropTypes.string
};

export default GenericContentList;
