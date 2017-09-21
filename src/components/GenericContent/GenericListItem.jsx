import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


import './GenericListItem.css';

class GenericListItem extends Component {
  render() {

    let className = "generic-content-list-item "

    if(this.props.propClass) {
      className += this.props.propClass;
    }

    return (
      <article className={className}>
        <Link to={this.props.link ? this.props.link : '#'}>
          <img src={this.props.image} alt={this.props.title} />
          {this.props.children}
          <h4>{this.props.title}</h4>
        </Link>
      </article>
    );
  }
}

GenericListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  propClass: PropTypes.string
};

export default GenericListItem;
