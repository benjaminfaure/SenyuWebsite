import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import ScrollToTop from 'react-scroll-up';
import FaCircleOArrowUp from 'react-icons/lib/fa/arrow-circle-o-up';
import FaWindowClose from 'react-icons/lib/fa/close';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { translate } from 'react-i18next';



import { WIDTH_BREAKPOINT } from '../constants';
import {
  getDimensions,
} from '../reducers';


import Menu from './Menu/Menu.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';


import ErrorsActionCreators from '../actions/ErrorsActionCreators';


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

  closeErrorWindow() {
    this.props.markHasBeenRead();
  }


  render() {

    const { t } = this.props;

    const meta = <Helmet>
      <title>Senyu | {t('titles.generic')}</title>
    </Helmet>

    const scrollStyle = {
      color: "#D12222",
      zIndex: 3,
      fontSize: '50px',
    }

    let errorMessages = [];
    let errorClose;
    if (this.props.errorMessage && this.props.errorMessage.length > 0) {
      errorClose = <span className="close-button" onClick={this.closeErrorWindow.bind(this)}>Fermer <FaWindowClose/></span>
      this.props.errorMessage.forEach((message, i) => {
        errorMessages.push(
          <span key={i} className="generic-error-message">
            {message}
          </span>)
      })

    }

    return (
      <div className="App" >
        <ScrollToTop showUnder={160} style={scrollStyle}>
          <FaCircleOArrowUp />
        </ScrollToTop>
        {meta}
        <Header toggleMenu={this.toggleMenu.bind(this)} isMenuOpen={this.state.isMenuOpen} />
        <Menu currentLocation={this.state.currentLocation} />
        <main className={this.state.isMenuOpen ? "main-content open" : "main-content"}>
          <div className="generic-error-message-list">
            {errorClose}
            {errorMessages}
          </div>

          {renderRoutes(this.props.route.routes)}
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  showMainContent: PropTypes.bool,
  errorMessage: PropTypes.array,
};

const mapStateToProps = (state) => (
  {
    dimensions: getDimensions(state),
    errorMessage: state.errorHandling,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    markHasBeenRead: () => dispatch(ErrorsActionCreators.markErrorshasBeenRead())
  }
)



export default translate('translations')(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));
