import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import { Helmet } from "react-helmet";
import { translate } from 'react-i18next';
import { connect } from 'react-redux';

import ReferentForm from './ReferentForm.jsx';
import IntervenantForm from './IntervenantForm.jsx';
import StandForm from './StandForm.jsx';
import InfosComplementairesForm from './InfosComplementairesForm.jsx';
import ValidationForm from './ValidationForm.jsx';
import RegistrationsActionCreators from '../../actions/RegistrationsActionCreators';

import './GenericRegistrationForm.css';

let registrationType;
let currentTab = 0;
let tabs = [];

class GenericRegistrationForm extends Component {

  constructor(props) {
    super(props);

    this.handleNextPrev = this.handleNextPrev.bind(this);
    this.handleShowTab = this.handleShowTab.bind(this);
    this.fixStepIndicator = this.fixStepIndicator.bind(this);
    this.validateFormTab = this.validateFormTab.bind(this);

    this.formRefs = {
      referent: {
        nomReferent: React.createRef(),
        prenomReferent: React.createRef(),

      }
    }

  }

  componentDidMount() {
    registrationType = this.props.match.params.registrationType;
    this.props.fetchModelesDeStands(registrationType);
    tabs = document.getElementsByClassName('tab');
    this.handleShowTab(currentTab);
  }



  render() {

    const { t, handleSubmit, pristine, invalid, submitting } = this.props;
    const pageTitle = t(`content.registration.${registrationType}.pageTitle`);

    const meta = <Helmet>
      <title>Senyu | {pageTitle}</title>
    </Helmet>

    return (
      <div className="generic-form">
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{pageTitle}</h1>
        </section>
        <form onSubmit={handleSubmit(this.props.submitRegistration)}>
          <ReferentForm formRefs={this.formRefs.referent} />
          <IntervenantForm />
          <StandForm modeles={this.props.modeles} />
          <InfosComplementairesForm registrationType={registrationType} />
          <ValidationForm pristine={pristine} submitting={submitting} invalid={invalid} />

          <div style={{ overflow: 'auto' }}>
            <div style={{ float: 'right' }}>
              <button type="button" id="prevBtn" ref="prevBtn" onClick={() => { this.handleNextPrev(-1) }}>Précédent</button>
              <button type="button" id="nextBtn" ref="nextBtn" onClick={() => { this.handleNextPrev(1) }}>Suivant</button>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: "40px" }}>
            <span className="step"></span>
            <span className="step"></span>
            <span className="step"></span>
            <span className="step"></span>
            <span className="step"></span>
          </div>
        </form>
      </div>
    );

  }

  handleNextPrev(n) {
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !this.validateFormTab()) return false;
    if (tabs.length > 0 ) {

      // Hide the current tab:
      tabs[currentTab].style.display = "none";
      // Increase or decrease the current tab by 1:
      currentTab = currentTab + n;
      // Otherwise, display the correct tab:
      this.handleShowTab(currentTab);
    }

  }

  handleShowTab(n) {
    if (tabs.length > 0) {
      tabs[n].style.display = "block";

      // ... and fix the Previous/Next buttons:
      if (n === 0) {
        this.refs.prevBtn.style.display = "none";
      } else {
        this.refs.prevBtn.style.display = "inline";
      }

      if (n === (tabs.length - 1)) {
        this.refs.nextBtn.style.display = "none"
      } else {
        this.refs.nextBtn.style.display = "inline"
        this.refs.nextBtn.innerHTML = "Suivant";
      }
      // ... and run a function that displays the correct step indicator:
      this.fixStepIndicator(n)
    }


  }

  fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, steps = document.getElementsByClassName("step");
    for (i = 0; i < steps.length; i++) {
      steps[i].className = steps[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    steps[n].className += " active";
  }

  validateFormTab() {
    if (tabs.length > 0) {
      let tab = tabs[currentTab];
      let formFields = tab.getElementsByClassName("generic-form-field")
      for (let i = 0; i < formFields.length; i++) {
        if(!formFields[i].checkValidity())
          return false;
      }
      return true;
    }
    return false;
  }

}

const mapStateToProps = (state) => (
  {
    modeles: state.modeles.list,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    submitRegistration: (values) => dispatch(RegistrationsActionCreators.submitRegistration({ ...values, typeIntervenant: registrationType })),
    fetchModelesDeStands: (type) => dispatch(RegistrationsActionCreators.fetchModelesDeStands(type))
  }
);

const createReduxForm = reduxForm({ form: 'registration' })

export default createReduxForm(translate('translations')(connect(mapStateToProps, mapDispatchToProps)(GenericRegistrationForm)));
