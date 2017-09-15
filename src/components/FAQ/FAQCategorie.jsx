import React, { Component } from 'react';
import PropTypes from 'prop-types';


import FAQQuestion from './FAQQuestion.jsx';

import './FAQCategorie.css';

class FAQCategorie extends Component {


  render() {

    let questionsList = this.props.questions.map((question) => {
      return <FAQQuestion key={question.id}
        question={question.question}
        reponse={question.reponse}/>
      });

      return (
        <article className="faq-categorie">
          <div className="faq-categorie-label">
            <h4>{this.props.categorie}</h4>
          </div>
          <div className="faq-categorie-questions">
            {questionsList}
          </div>
        </article>
      );
    }
  }

  FAQCategorie.propTypes = {
    categorie: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.object)
  };



  export default FAQCategorie;
