import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';

import './GenericContentItem.css';

class GenericContentItem extends Component {

  render() {

    let className = "generic-content ";

    const meta = <Helmet>
      <title>Senyu | {this.props.title}</title>
      <meta property="og:title" content={this.props.title} />
      <meta property="og:image" content={this.props.image} />
      <meta property="og:description" content={this.props.content} />
      <meta property="twitter:title" content={this.props.title} />
      <meta property="twitter:image" content={this.props.image} />
      <meta property="twitter:description" content={this.props.content} />
    </Helmet>

    if (this.props.propClass) {
      className += this.props.propClass;
    }

    return (
      <section className={className}>
        {meta}
        <article className="generic-content-image">
          <img src={this.props.image} alt={this.props.title} />
        </article>
        <article className="generic-content-description">
          <h4 className="generic-content-title">{this.props.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: this.props.content }} />
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
