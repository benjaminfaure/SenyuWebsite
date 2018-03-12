import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import ScrollToTop from 'react-scroll-up';
import FaCircleOArrowUp from 'react-icons/lib/fa/arrow-circle-o-up';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';


import { WIDTH_BREAKPOINT } from '../constants';
import {
  getDimensions,
} from '../reducers';

import Menu from './Menu/Menu.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

import MainPage from './MainPage/MainPage.jsx';

import Intervenant from './Intervenants/Intervenant.jsx';
import Intervenants from './Intervenants/Intervenants.jsx';

import Animations from './Animations/Animations.jsx';
import Animation from './Animations/Animation.jsx';

import Exposant from './Exposants/Exposant.jsx';
import Exposants from './Exposants/Exposants.jsx';

import FAQ from './FAQ/FAQ.jsx';

import Stream from './Stream/Stream.jsx';

import Cosplay from './Cosplay/Cosplay.jsx';

import Communication from './Communication/Communication.jsx';

import Reglements from './Reglements/Reglements.jsx';
import Reglement from './Reglements/Reglement.jsx';

import Contact from './Contact/Contact.jsx';

import Billeterie from './Billeterie/Billeterie.jsx';

import Planning from './Planning/Planning.jsx';

import Plans from './Plans/Plans.jsx';

import Partenaires from './Partenaires/Partenaires.jsx';

import Guide from './Guide/Guide.jsx';

import EnTravaux from './EnTravaux/EnTravaux.jsx';

import Redirect from './Redirect/Redirect.jsx';

import NotFound from './NotFound/NotFound.jsx';

import './App.css';



GoogleAnalytics.initialize(process.env.REACT_APP_ANALYTICS_ID, { debug: true });

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    };

  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }


  componentDidMount() {
    this.props.history.listen((location, action) => {
      this.setState({ isMenuOpen: false })
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
        <Menu />
        <main className={this.state.isMenuOpen ? "main-content open" : "main-content"}>
          {errorMessage}
          <Switch>
            <Route exact path="/" component={MainPage} />
            {/* Intervenants */}
            <Route exact path="/invites" component={Intervenants} />
            <Route path="/invites/:intervenantId" component={Intervenant} />
            {/* Exposants */}
            <Route exact path="/exposants" component={Exposants} />
            <Route path="/exposants/:exposantId" component={Exposant} />
            {/* Animations */}
            <Route exact path="/animations" component={Animations} />
            <Route path="/animations/:animationId" component={Animation} />
            {/* FAQ */}
            <Route exact path="/faq" component={FAQ} />
            {/* Reglements */}
            <Route exact path="/reglements" component={Reglements} />
            <Route path="/reglements/:reglementType" component={Reglement} />
            {/* Plans */}
            <Route exact path="/plans" component={Plans} />
            {/* Planning */}
            <Route exact path="/planning" component={Planning} />
            {/* Guide */}
            <Route exact path="/guide" component={Guide} />
            {/* Contact */}
            <Route exact path="/contact" component={Contact} />
            {/* Cosplay */}
            <Route exact path="/cosplay" component={Cosplay} />
            {/* Communication */}
            <Route exact path="/communication" component={Communication} />
            {/* Stream */}
            <Route exact path="/stream" component={Stream} />
            {/* Presse */}
            <Route exact path="/presse" component={EnTravaux} />
            {/* Archive */}
            <Route exact path="/archive" component={EnTravaux} />
            {/* Partenaires */}
            <Route exact path="/partenaires" component={Partenaires} />
            {/* Recrutement */}
            <Route exact path="/recrutement" component={EnTravaux} />
            {/* Billeterie */}
            <Route exact path="/billeterie" component={EnTravaux} />
            {/* Redirection Inscriptions */}
            <Route exact path="/ws/inscriptions" component={Redirect} />
            <Route path="/ws/inscriptions/:typeInscription" component={Redirect} />

            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
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
