import React, { Component } from 'react';
import { Field } from 'redux-form';
import { withTranslation } from 'react-i18next';

import { normalizePhone, normalizeBirthDay } from '../../utils';

class ReferentForm extends Component {


  render() {

    return (
      <div className="tab" ref="referent">
        <div className="generic-form-header">Informations concernant le référent</div>
        <div className="generic-form-body">
          <label htmlFor="nomReferent">
            Nom de la personne référente
            <span className="requiredField">*</span>
          </label>
          <Field
            component="input"
            type="text"
            id="nomReferent" className="generic-form-field" name="nomReferent" required />

          <label htmlFor="prenomReferent">
            Prénom de la personne référente
            <span className="requiredField">*</span>
          </label>
          <Field
            component="input"
            type="text"
            id="prenomReferent" className="generic-form-field" name="prenomReferent" required />

          <label htmlFor="dateNaissanceReferent">
            Date de naissance de la personne référente
            <span className="requiredField">*</span>
          </label>
          <Field
            component="input"
            type="text"
            id="dateNaissanceReferent" className="generic-form-field" name="dateNaissanceReferent"
            placeholder="JJ/MM/AAAA"
            normalize={normalizeBirthDay} required />

          <label htmlFor="mailReferent">
            Mail de la personne référente
            <span className="requiredField">*</span>
          </label>
          <Field
            component="input"
            type="email"
            id="mailReferent" className="generic-form-field" name="mailReferent" required />

          <label htmlFor="adresseReferent">
            Adresse de la personne référente
            <span className="requiredField">*</span>
          </label>
          <Field
            component="input"
            type="text"
            id="adresseReferent" className="generic-form-field" name="adresseReferent" required />

          <label htmlFor="telephoneReferent">
            Téléphone de la personne référente
            <span className="requiredField">*</span>
          </label>
          <Field
            component="input"
            type="tel"
            id="telephoneReferent" className="generic-form-field" name="telephoneReferent"
            placeholder="01-23-45-67-89"
            normalize={normalizePhone} required />

          <label htmlFor="informationsDeContactConfidentielles" className="checkbox">
            J’autorise la transmission de mes informations de contact à d'autres organisateurs d'évènements.
              <Field
              component="input"
              type="checkbox"
              id="informationsDeContactConfidentielles" className="generic-form-field" name="informationsDeContactConfidentielles" />
          </label>
        </div>
      </div>


    );

  }
}
export default withTranslation('translations')(ReferentForm);
