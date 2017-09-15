import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleDown from 'react-icons/lib/fa/angle-down';


import './FAQQuestion.css';

class FAQQuestion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showReponse: false
    };
  }


  toggleReponse() {
    this.setState({showReponse: !this.state.showReponse})
  }

  render() {

    let arrow = this.state.showReponse ? <FaAngleDown/> : <FaAngleRight/>

    return (
      <article className="faq-question">
        <h4 className="faq-question-question" onClick={this.toggleReponse.bind(this)}>
          {this.props.question}
          <span className="faq-question-arrow">{arrow}</span>
        </h4>
        <p className={this.state.showReponse ? "faq-question-reponse open" : "faq-question-reponse"} dangerouslySetInnerHTML={{__html:this.props.reponse}} />
      </article>
    );
  }
}

FAQQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  reponse: PropTypes.string.isRequired
};



export default FAQQuestion;
