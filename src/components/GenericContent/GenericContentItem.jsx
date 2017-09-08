import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './GenericContentItem.css';

class GenericContentSingle extends Component {
  render() {
    return (
      <section>
        <article className="content-image">
          <img src={this.props.image} alt={this.props.title} />
          <h4>{this.props.title}</h4>
        </article>
        <article className="content-description">
          <h4>{this.props.title}</h4>
          <p dangerouslySetInnerHTML={{__html:this.props.content}} />
          {this.props.children}
        </article>
      </section>
    );
  }
}

GenericContentSingle.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string
};

export default GenericContentSingle;
