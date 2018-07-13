import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Helmet } from "react-helmet";
import { translate } from 'react-i18next';
import { connect } from 'react-redux';

import GenericFileUpload from '../GenericContent/GenericFileUpload.jsx';
import RegistrationsActionCreators from '../../actions/RegistrationsActionCreators';

import './GenericRegistrationForm.css';

let registrationType;
let currentTab = 0;

class GenericRegistrationForm extends Component {

  constructor(props) {
    super(props);

    this.handleNextPrev = this.handleNextPrev.bind(this);
    this.handleShowTab = this.handleShowTab.bind(this);
    this.fixStepIndicator = this.fixStepIndicator.bind(this);


  }

  componentDidMount() {
    registrationType = this.props.match.params.registrationType;
    this.props.fetchModelesDeStands(registrationType);
    this.handleShowTab(currentTab);
  }



  render() {

    const { t, handleSubmit, pristine, reset, submitting } = this.props;
    const pageTitle = t(`content.registration.${registrationType}.pageTitle`);

    const meta = <Helmet>
      <title>Senyu | {pageTitle}</title>
    </Helmet>

    let modelesList = this.props.modeles.map((modele) => {
      return <option value={modele.id} key={modele.id} >{modele.libelle}</option>
    });

    return (
      <div className="generic-form">
        {meta}
        <section className="generic-page-header">
          <h1 className="generic-page-title">{pageTitle}</h1>
        </section>
        <form onSubmit={handleSubmit(this.props.submitRegistration)}>

          <div className="tab" ref="referent">
            <label htmlFor="nomReferent">
              Nom de la personne référente
            <span className="requiredField">*</span>
            </label>
            <Field
              component="input"
              type="text"
              id="nomReferent" name="nomReferent" required />

            <label htmlFor="prenomReferent">
              Prénom de la personne référente
            <span className="requiredField">*</span>
            </label>
            <Field
              component="input"
              type="text"
              id="prenomReferent" name="prenomReferent" required />

            <label htmlFor="dateNaissanceReferent">
              Date de naissance de la personne référente
            <span className="requiredField">*</span>
            </label>
            <Field
              component="input"
              type="date"
              id="dateNaissanceReferent" name="dateNaissanceReferent" required />

            <label htmlFor="mailReferent">
              Mail de la personne référente
            <span className="requiredField">*</span>
            </label>
            <Field
              component="input"
              type="email"
              id="mailReferent" name="mailReferent" required />

            <label htmlFor="adresseReferent">
              Adresse de la personne référente
            <span className="requiredField">*</span>
            </label>
            <Field
              component="input"
              type="text"
              id="adresseReferent" name="adresseReferent" required />

            <label htmlFor="telephoneReferent">
              Téléphone de la personne référente
            <span className="requiredField">*</span>
            </label>
            <Field
              component="input"
              type="tel"
              id="telephoneReferent" name="telephoneReferent"
              placeholder="01-23-45-67-89"
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" required />

            <label htmlFor="informationsDeContactConfidentielles" className="checkbox">
              J’autorise la transmission de mes informations de contact à des tiers.
              <Field
                component="input"
                type="checkbox"
                id="informationsDeContactConfidentielles" name="informationsDeContactConfidentielles" />
            </label>
          </div>


          <div className="tab" ref="intervenant">
            <label htmlFor="nomIntervenant">
              Nom de l'intervenant sur le site et sur le panonceau du stand
            <span className="requiredField">*</span>
            </label>
            <Field
              component="input"
              type="text"
              id="nomIntervenant" name="nomIntervenant" required />

            <label htmlFor="descriptionIntervenant">
              Description de l'intervenant publiée sur le site
            <span className="requiredField">*</span>
            </label>
            <Field
              component="textarea"
              id="descriptionIntervenant" name="descriptionIntervenant"
              rows="10" required />

            <label htmlFor="facebook">
              Lien vers la page Facebook officielle
              </label>
            <Field
              component="input"
              type="url"
              id="facebook" name="facebook" />

            <label htmlFor="twitter">
              Lien vers la page Twitter officielle
              </label>
            <Field
              component="input"
              type="url"
              id="twitter" name="twitter" />

            <label htmlFor="youtube">
              Lien vers la page Youtube officielle
              </label>
            <Field
              component="input"
              type="url"
              id="youtube" name="youtube" />

            <label htmlFor="twitch">
              Lien vers la page Twitch officielle
            </label>
            <Field
              component="input"
              type="url"
              id="twitch" name="twitch" />

            <label htmlFor="siteWeb">
              Lien vers le site web officiel
            </label>
            <Field
              component="input"
              type="url"
              id="siteWeb" name="siteWeb" />

            <label htmlFor="image">
              Image affichée sur le site web
            </label>
            <Field
              component={GenericFileUpload}
              id="image" name="image" />
          </div>

          <div className="tab" ref="stand">
            <label htmlFor="modeleDeStand">
              Modèle de stand
            <span className="requiredField">*</span>
            </label>
            <Field
              component="select"
              type="text"
              id="modeleDeStand" name="modeleDeStand" required >
              {modelesList}
            </Field>
          </div>

          <div className="tab" ref="validation">
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
           </button>
          </div>

          <div style={{ overflow: 'auto' }}>
            <div style={{ float: 'right' }}>
              <button type="button" id="prevBtn" ref="prevBtn" onClick={this.handleNextPrev(-1)}>Previous</button>
              <button type="button" id="nextBtn" ref="nextBtn" onClick={this.handleNextPrev(1)}>Next</button>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: "40px" }}>
            <span class="step"></span>
            <span class="step"></span>
            <span class="step"></span>
            <span class="step"></span>
          </div>
        </form>
      </div>
    );

  }

  handleNextPrev(n) {
    // This function will figure out which tab to display
    let tabs = document.getElementsByClassName('tab');
    // Exit the function if any field in the current tab is invalid:
    if (n === 1) return false;
    if (tabs.length > 0) {
      // Hide the current tab:
      tabs[currentTab].style.display = "none";
      // Increase or decrease the current tab by 1:
      currentTab = currentTab + n;
      // Otherwise, display the correct tab:
      this.handleShowTab(currentTab);
    }

  }

  handleShowTab(n) {
    // This function will display the specified tab of the form ...
    let tabs = document.getElementsByClassName('tab');

    if (tabs.length > 0) {
      tabs[n].style.display = "block";

      // ... and fix the Previous/Next buttons:
      if (n === 0) {
        this.refs.prevBtn.style.display = "none";
      } else {
        this.refs.prevBtn.style.display = "inline";
      }

      if (n === (tabs.length - 1)) {
        this.refs.nextBtn.innerHTML = "Submit";
      } else {
        this.refs.nextBtn.innerHTML = "Next";
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


}

const mapStateToProps = (state) => (
  {
    modeles: state.modeles.list,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    submitRegistration: (values) => dispatch(RegistrationsActionCreators.submitRegistration({ ...values, type: registrationType })),
    fetchModelesDeStands: (type) => dispatch(RegistrationsActionCreators.fetchModelesDeStands(type))
  }
);

const createReduxForm = reduxForm({ form: 'registration' })

export default createReduxForm(translate('translations')(connect(mapStateToProps, mapDispatchToProps)(GenericRegistrationForm)));
