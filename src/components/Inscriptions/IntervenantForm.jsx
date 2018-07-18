import React, { Component } from 'react';
import { Field } from 'redux-form';
import { translate } from 'react-i18next';

import GenericFileUpload from '../GenericContent/GenericFileUpload.jsx';

class IntervenantForm extends Component {


  render() {

    const { t } = this.props;

    return (
      <div className="tab" ref="intervenant">
        <div className="generic-form-header">Informations publiées sur le site</div>
        <div className="generic-form-body">
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
            maxlength="2048"
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
      </div>


    );

  }
}
export default translate('translations')(IntervenantForm);
