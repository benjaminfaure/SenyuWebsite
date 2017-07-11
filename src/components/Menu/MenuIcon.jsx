import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './MenuIcon.css';
import MenuActionCreators from '../../actions/MenuActionCreators';
import { getShowMainContent } from '../../reducers';

class MenuIcon extends Component {


  render() {
    return (
      <div className={this.props.isMenuOpen ? "menu-icon open" : "menu-icon"}
        onClick={this.props.toggleMainContent}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}


MenuIcon.propTypes = {
  toggleMainContent: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool
};


const mapStateToProps = (state) => (
  {
    isMenuOpen: !getShowMainContent(state)
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    toggleMainContent: () => dispatch(MenuActionCreators.toggleMainContent())
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(MenuIcon);
