import React, { Component } from 'react';
import { Field } from 'redux-form';
import { translate } from 'react-i18next';


import { isValidSiret } from '../../utils';


class InfosComplementairesForm extends Component {

  constructor(props) {
    super(props);

    this.handleSiretValidation = this.handleSiretValidation.bind(this)
  }

  render() {

    const { t } = this.props;


    let infosComplementairesField =
      <div className="generic-form-body">
      </div>;

    if (this.props.registrationType === "boutique" || this.props.registrationType === "createur") {
      infosComplementairesField =
        <div className="generic-form-body">
          <label htmlFor="numeroSIRET">
            Numéro SIRET
          <span className="requiredField">*</span>
          </label>
          <Field
            component="input"
            type="text" ref="numeroSIRET"
            placeholder="Renseignez votre SIRET"
            onBlur={this.handleSiretValidation}
            id="numeroSIRET" className="generic-form-field" name="numeroSIRET" required />

          <label htmlFor="raisonSociale">
            Raison sociale
            <span className="requiredField">*</span>
          </label>
          <Field
            component="input"
            type="text" ref="raisonSociale"
            placeholder="Renseignez votre raison sociale"
            id="raisonSociale" className="generic-form-field" name="raisonSociale" required />
        </div>;

    }

    if (this.props.registrationType === "animation" || this.props.registrationType === "invite") {
      infosComplementairesField =
        <div className="generic-form-body">
          <label htmlFor="materielApporte">
            Matériel apporté (max: 1000 caractères)
          </label>
          <Field
            component="textarea"
            maxLength="1024"
            id="materielApporte" className="generic-form-field" name="materielApporte"
            rows="10" />

          <label htmlFor="animationsProposees">
            Animations proposées (max: 2000 caractères)
          </label>
          <Field
            component="textarea"
            maxLength="2048"
            id="animationsProposees" className="generic-form-field" name="animationsProposees"
            rows="10" />

          <label htmlFor="moyenDeTransport">
            Moyen de transport
            <span className="requiredField">*</span>
          </label>
          <Field
            component="select"
            type="text"
            id="moyenDeTransport" className="generic-form-field" name="moyenDeTransport" required >
            <option key="none" style={{ display: "none" }}></option>
            <option value="voiture">Voiture</option>
            <option value="train">Train</option>
            <option value="autre">Autre</option>
          </Field>

          <label htmlFor="typeDeLogement">
            Type de logement
            <span className="requiredField">*</span>
          </label>
          <Field
            component="select"
            type="text"
            id="typeDeLogement" className="generic-form-field" name="typeDeLogement" required >
            <option key="none" style={{ display: "none" }}></option>
            <option value="hotel">Hotel</option>
            <option value="autre">Autre</option>
          </Field>
        </div>;
    }

    return (
      <div className="tab" ref="complementaire">
        <div className="generic-form-header">Informations complémentaires</div>
        {infosComplementairesField}
      </div>


    );
  }

  handleSiretValidation(e) {
    let isValid = isValidSiret(e.target.value)

    if (!isValid) {
      e.target.setCustomValidity(`SIRET non valide`);
    } else {
      e.target.setCustomValidity("");
    }
  }


}
export default translate('translations')(InfosComplementairesForm);
