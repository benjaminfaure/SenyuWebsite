import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './GenericContentItem.css';

class GenericContentItem extends Component {
  render() {

    let className = "generic-content "

    if(this.props.propClass) {
      className += this.props.propClass;
    }

    return (
      <section className={className}>
        <article className="generic-content-image">
          <img src={this.props.image} alt={this.props.title} />
        </article>
        <article className="generic-content-description">
          <h4 className="generic-content-title">{this.props.title}</h4>
          <p dangerouslySetInnerHTML={{__html:this.props.content}} />
          {this.props.children}
        </article>
      </section>
    );
  }
}

GenericContentItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  propClass: PropTypes.string
};

export default GenericContentItem;
