import React, { Component } from 'react';
import { Field } from 'redux-form';
import { translate } from 'react-i18next';

class ReferentForm extends Component {


  render() {

    const { t } = this.props;

    return (
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


    );

  }
}
export default translate('translations')(ReferentForm);
