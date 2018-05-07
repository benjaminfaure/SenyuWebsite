import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import ScrollToTop from 'react-scroll-up';
import FaCircleOArrowUp from 'react-icons/lib/fa/arrow-circle-o-up';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';


import { WIDTH_BREAKPOINT } from '../constants';
import {
  getDimensions,
} from '../reducers';


import Menu from './Menu/Menu.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';


import './App.css';



GoogleAnalytics.initialize(process.env.REACT_APP_ANALYTICS_ID, { debug: true });

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      currentLocation: this.props.location.pathname,
    };

  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      this.setState({ currentLocation: this.props.location.pathname });
    }
  }


  componentDidMount() {
    this.props.history.listen((location, action) => {
      this.setState({ isMenuOpen: false, currentLocation: this.props.location.pathname });
      const page = location.pathname;
      GoogleAnalytics.set({ page });
      GoogleAnalytics.pageview(page);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dimensions.width >= WIDTH_BREAKPOINT) {
      this.setState({ isMenuOpen: false })
    }
  }


  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }



  render() {
    const meta = <Helmet>
      <title>Senyu | 3 et 4 Mars 2018</title>
    </Helmet>

    const scrollStyle = {
      color: "#D12222",
      zIndex: 3,
      fontSize: '50px',
    }

    let errorMessage;
    if (this.props.errorMessage) {
      errorMessage = (
        <p className="generic-error-message">
          {this.props.errorMessage}
        </p>
      )
    }

    return (
      <div className="App" >
        <ScrollToTop showUnder={160} style={scrollStyle}>
          <FaCircleOArrowUp />
        </ScrollToTop>
        {meta}
        <Header toggleMenu={this.toggleMenu.bind(this)} isMenuOpen={this.state.isMenuOpen} />
        <Menu currentLocation={this.state.currentLocation}/>
        <main className={this.state.isMenuOpen ? "main-content open" : "main-content"}>
          {errorMessage}

          {renderRoutes(this.props.route.routes)}
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  showMainContent: PropTypes.bool,
  errorMessage: PropTypes.string,
};

const mapStateToProps = (state) => (
  {
    dimensions: getDimensions(state),
    errorMessage: state.errorHandling,
  }
);



export default withRouter(connect(mapStateToProps, null)(App));
