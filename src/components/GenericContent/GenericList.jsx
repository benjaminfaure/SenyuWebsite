import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';



import './GenericList.css';

class GenericList extends Component {
  render() {


    let titrePage = this.props.titrePage && this.props.itemList.length > 0 ? this.props.titrePage : "Aucun enregistrement trouvé"

    const meta = <Helmet>
      <title>Senyu | {titrePage}</title>
    </Helmet>

    return (
      <div>
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{titrePage}</h1>
        </section>
        <section className="generic-content-list-filters">
          {this.props.children}
        </section>
        <section className="generic-content-list">
          {this.props.itemList}
        </section>
      </div>
    );
  }
}

GenericList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object),
  activateSearch: PropTypes.bool,
  genericListSearchOnChange: PropTypes.func,
  titrePage: PropTypes.string
};

export default GenericList;
