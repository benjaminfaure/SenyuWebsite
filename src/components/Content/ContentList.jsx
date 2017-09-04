import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './ContentList.css';

class ContentList extends Component {
  render() {

  return (
    <section>
      { this.props.itemList }
    </section>
  );
}
}

ContentList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object),
};

export default ContentList;
