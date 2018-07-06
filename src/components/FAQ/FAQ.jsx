import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import FAQActionCreators from '../../actions/FAQActionCreators';

import FAQCategorie from './FAQCategorie.jsx';


import './FAQ.css';

class FAQ extends Component {


  componentDidMount() {
    this.props.fetchFAQ();
  }

  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>Senyu | {t('titles.faq')}</title>
    </Helmet>

    let categoriesList = this.props.faq.map((categorie) => {
      return <FAQCategorie key={categorie.id}
        categorie={categorie.categorie}
        questions={categorie.questions} />
    });

    return (
      <div>
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{t('content.faq.pageTitle')}</h1>
        </section>
        <section className="faq">
          {categoriesList}
        </section>
      </div>
    );
  }
}

FAQ.propTypes = {
  faq: PropTypes.arrayOf(PropTypes.object)
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

export default translate('translations')(connect(mapStateToProps, mapDispatchToProps)(FAQ));
