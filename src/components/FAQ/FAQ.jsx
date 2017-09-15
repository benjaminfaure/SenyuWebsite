import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FAQActionCreators from '../../actions/FAQActionCreators';

import FAQCategorie from './FAQCategorie.jsx';


import './FAQ.css';

class FAQ extends Component {


  componentDidMount() {
    this.props.fetchFAQ();
  }

  render() {
    
    let categoriesList = this.props.faq.map((categorie) => {
      return <FAQCategorie key={categorie.id}
                    categorie={categorie.categorie}
                    questions={categorie.questions}/>
    });

    return (
      <section className="faq">
        {categoriesList}
      </section>
    );
  }
}

FAQ.propTypes = {
    faq: PropTypes.arrayOf(PropTypes.object),
};


const mapStateToProps = (state) => (
  {
    faq: state.faq
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchFAQ: () => dispatch(FAQActionCreators.fetchFAQ()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
