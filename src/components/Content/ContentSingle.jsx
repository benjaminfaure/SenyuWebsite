import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ContentSingle.css';

class ContentSingle extends Component {
  render() {
    return (
      <article>
        <div className="content-description">
          <h4>{this.props.title}</h4>
          <p>{this.props.content}</p>
          {this.props.children}
        </div>
        <div className="content-image">
          <img src={this.props.image}/>
        </div>

      </article>
    );
  }
}

ContentSingle.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string
};

export default ContentSingle;
