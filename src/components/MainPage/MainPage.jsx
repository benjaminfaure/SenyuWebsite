import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './MainPage.css';
import DimensionsActionCreators from '../../actions/DimensionsActionCreators';
import {
  getDimensions
} from '../../reducers';
import MainPageSlider from './MainPageSlider.jsx';



class MainPage extends Component {
  componentWillMount() {
    this.props.updateDimensions();
  }


  componentDidMount() {
    window.addEventListener("resize", this.props.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.props.updateDimensions);
  }

  render() {
    return (
      <div >
        <MainPageSlider/>
        <section >
          <article>
            <span>{this.props.dimensions.width} x {this.props.dimensions.height}</span>
          </article>
          <article>
            <div id="twitch-embed"></div>
          </article>
          <article>

          </article>
          <article>

          </article>
        </section>
      </div>
    );
  }
}


MainPage.propTypes = {
  updateDimensions: PropTypes.func.isRequired
};

const mapStateToProps = (state) => (
  {
    dimensions: getDimensions(state)
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    updateDimensions: () => dispatch(DimensionsActionCreators.updateDimensions()),
  }
);



export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
