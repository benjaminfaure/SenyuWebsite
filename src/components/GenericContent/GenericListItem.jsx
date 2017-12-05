import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


import './GenericListItem.css';

class GenericListItem extends Component {
  render() {

    let className = "generic-content-list-item "

    if (this.props.propClass) {
      className += this.props.propClass;
    }

    const imgUrl = this.props.image ? this.props.image : '/logo_mobile.png'

    const styles = {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'none',
      backgroundPosition: 'center center',
    }

    return (
      <article className={className}   >
        <Link to={this.props.link ? this.props.link : '#'}>
          <div className="generic-content-list-item-image" style={styles}></div>
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
