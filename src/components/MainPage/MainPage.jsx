import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './MainPage.css';
import { WIDTH_BREAKPOINT } from '../../constants';
import DimensionsActionCreators from '../../actions/DimensionsActionCreators';
import MenuActionCreators from '../../actions/MenuActionCreators';
import {
  getShowMainContent,
  getDimensions
} from '../../reducers';
import MainPageSlider from './MainPageSlider.jsx';
import MainPageGoogleMap from './MainPageGoogleMap.jsx';



class MainPage extends Component {
  componentWillMount() {
    this.props.updateDimensions();
  }


  componentWillReceiveProps(nextProps) {
    if(!nextProps.showMainContent
      && nextProps.dimensions.width >= WIDTH_BREAKPOINT )
    {
      nextProps.resetMenuState();
    }
  }


  componentDidMount() {
    window.addEventListener("resize", this.props.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.props.updateDimensions);
  }

  render() {
    return (
      <div className={this.props.showMainContent ? "main-content" : "main-content open"}>
        <MainPageSlider/>
        <section id="left-content">
          <article>
            <span>{this.props.dimensions.width} x {this.props.dimensions.height}</span>
          </article>
          <article>

          </article>
          <article>

          </article>
          <article>

          </article>
        </section>
        <MainPageGoogleMap/>
      </div>
    );
  }
}


MainPage.propTypes = {
  showMainContent: PropTypes.bool,
  updateDimensions: PropTypes.func.isRequired,
  resetMenuState: PropTypes.func.isRequired
};

const mapStateToProps = (state) => (
  {
    showMainContent: getShowMainContent(state),
    dimensions: getDimensions(state)
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    updateDimensions: () => dispatch(DimensionsActionCreators.updateDimensions()),
    resetMenuState: () => dispatch(MenuActionCreators.resetMenuState()),
  }
);



export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
