import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { FaAngleRight, FaAngleDown } from 'react-icons/fa';


import './FAQQuestion.scss';

class FAQQuestion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showReponse: false
    };
  }

  componentDidUpdate(prevProps, prevState) {

    const node = ReactDOM.findDOMNode(this);
    if (this.state.showReponse) {
      window.scrollTo(0, node.offsetTop);
    }
  }

  toggleReponse() {
    this.setState({ showReponse: !this.state.showReponse })

  }

  render() {

    let arrow = this.state.showReponse ? <FaAngleDown /> : <FaAngleRight />

    return (
      <article className="faq-question">
        <h4 className="faq-question-question" onClick={this.toggleReponse.bind(this)}>
          {this.props.question}
          <span className="faq-question-arrow">{arrow}</span>
        </h4>
        <p className={this.state.showReponse ? "faq-question-reponse open" : "faq-question-reponse"} dangerouslySetInnerHTML={{ __html: this.props.reponse }} />
      </article>
    );
  }
}

FAQQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  reponse: PropTypes.string.isRequired
};



export default FAQQuestion;
