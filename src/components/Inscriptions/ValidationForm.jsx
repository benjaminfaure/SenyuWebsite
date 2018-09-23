import React, { Component } from 'react';
import { Field } from 'redux-form';
import { translate } from 'react-i18next';
import { getFormValues } from 'redux-form'
import { connect } from 'react-redux';

import {
  LIBELLE_REPARTITIONS_CLOISONS
} from '../../constants';


class ValidationForm extends Component {


  render() {

    const { t } = this.props;

    const formValues = this.props.values ? this.props.values : {}
    return (
      <div className="tab validation-tab" ref="validation">
        <div className="generic-form-header">Récapitulatif et validation</div>
        <div className="generic-form-body">
          <h2 className="generic-form-recap-title">Informations concernant le référent</h2>
          <p><span className="libelle">Nom de la personne référente : </span> <span className="value">{formValues.etape1.nomReferent}</span></p>
          <p><span className="libelle">Prénom de la personne référente : </span> <span className="value">{formValues.etape1.prenomReferent}</span></p>
          <p><span className="libelle">Date de naissance de la personne référente : </span> <span className="value">{formValues.etape1.dateNaissanceReferent}</span></p>
          <p><span className="libelle">Mail de la personne référente : </span> <span className="value">{formValues.etape1.mailReferent}</span></p>
          <p><span className="libelle">Adresse de la personne référente : </span> <span className="value">{formValues.etape1.adresseReferent}</span></p>
          <p><span className="libelle">Téléphone de la personne référente : </span> <span className="value">{formValues.etape1.telephoneReferent}</span></p>
          <p>
            <span className="libelle">J’autorise la transmission de mes informations de contact à des tiers. </span>
            <span className="value">
              {formValues.etape1.informationsDeContactConfidentielles ? "Oui" : "Non"}
            </span>
          </p>
          <hr />

          <h2 className="generic-form-recap-title">Informations publiées sur le site</h2>
          <p><span className="libelle">Nom de l'intervenant sur le site et sur le panonceau du stand : </span> <span className="value">{formValues.etape2.nomIntervenant}</span></p>
          <p><span className="libelle">Description de l'intervenant publiée sur le site : </span> <span className="value">{formValues.etape2.descriptionIntervenant}</span></p>
          {formValues.etape2.facebook ?
            <p><span className="libelle">Lien vers la page Facebook officielle : </span> <span className="value"><a href={formValues.etape2.facebook} alt="facebook-link">{formValues.etape2.facebook}</a></span></p> :
            ''
          }
          {formValues.etape2.twitter ?
            <p><span className="libelle">Lien vers la page Twitter officielle : </span> <span className="value"><a href={formValues.etape2.twitter} alt="twitter-link">{formValues.etape2.twitter}</a></span></p> :
            ''
          }
          {formValues.etape2.youtube ?
            <p><span className="libelle">Lien vers la page Youtube officielle : </span> <span className="value"><a href={formValues.etape2.youtube} alt="youtube-link">{formValues.etape2.youtube}</a></span></p> :
            ''
          }
          {formValues.etape2.twitch ?
            <p><span className="libelle">Lien vers la page Twitch officielle : </span> <span className="value"><a href={formValues.etape2.twitch} alt="twitch-link">{formValues.etape2.twitch}</a></span></p> :
            ''
          }
          {formValues.etape2.siteWeb ?
            <p><span className="libelle">Lien vers le site web officiel : </span> <span className="value"><a href={formValues.etape2.siteWeb} alt="siteWeb-link">{formValues.etape2.siteWeb}</a></span></p> :
            ''
          }
          <p><span className="libelle">Image affichée sur le site web : </span>
            <span>
              <img className="generic-file-preview"
                alt="file preview"
                src={formValues.etape2.image ? formValues.etape2.image[0].preview : '/images/logo_mobile.png'} />
            </span>
          </p>
          <hr />

          <h2 className="generic-form-recap-title">Paramétrage du stand</h2>
          <p><span className="libelle">Longueur désirée du stand (en mètres) : </span> <span className="value">{formValues.etape3.longueur}</span></p>
          <p><span className="libelle">Profondeur désirée du stand (en mètres) : </span> <span className="value">{formValues.etape3.profondeur}</span></p>
          <p><span className="libelle">Nombre de chaises désirées sur le stand : </span> <span className="value">{formValues.etape3.nombreDeChaises}</span></p>
          <p><span className="libelle">Nombre de tables désirées sur le stand : </span> <span className="value">{formValues.etape3.nombreDeTables}</span></p>
          <p><span className="libelle">Nombre de badges à éditer : </span> <span className="value">{formValues.etape3.nombreDeBadges}</span></p>
          <p><span className="libelle">Répartition des cloisons) : </span> <span className="value">{LIBELLE_REPARTITIONS_CLOISONS[formValues.etape3.repartitionsDesCloisons]}</span></p>
          <p>
            <span className="libelle">Raccordement électrique présent </span>
            <span className="value">
              {formValues.etape3.raccordementElectriquePresent ? "Oui" : "Non"}
            </span>
          </p>
          <hr />

          <h2 className="generic-form-recap-title">Informations complémentaires</h2>
          {formValues.etape4.numeroSIRET ?
            <p><span className="libelle">Numéro SIRET : </span> <span className="value">{formValues.etape4.numeroSIRET}</span></p> :
            ''
          }
          {formValues.etape4.raisonSociale ?
            <p><span className="libelle">Raison Sociale : </span> <span className="value">{formValues.etape4.raisonSociale}</span></p> :
            ''
          }
          {formValues.etape4.materielApporte ?
            <p><span className="libelle">Matériel apporté : </span> <span className="value">{formValues.etape4.materielApporte}</span></p> :
            ''
          }
          {formValues.etape4.animationsProposees ?
            <p><span className="libelle">Animations proposées : </span> <span className="value">{formValues.etape4.animationsProposees}</span></p> :
            ''
          }
          {formValues.etape4.moyenDeTransport ?
            <p><span className="libelle">Moyen de transport : </span> <span className="value">{formValues.etape4.moyenDeTransport}</span></p> :
            ''
          }
          {formValues.etape4.typeDeLogement ?
            <p><span className="libelle">Type de logement : </span> <span className="value">{formValues.etape4.typeDeLogement}</span></p> :
            ''
          }
          <hr />

          <label htmlFor="conditionsGeneralesDeServiceAcceptees">
            J’accepte les conditions générales de service
              <span className="requiredField">*</span>
          </label>
          <Field
            component="input"
            type="checkbox"
            id="conditionsGeneralesDeServiceAcceptees" name="conditionsGeneralesDeServiceAcceptees" required />

          <button type="submit" id="validBtn" disabled={this.props.pristine || this.props.submitting || this.props.invalid}>
            Submit
        </button>
        </div>
      </div>


    );

  }
}

const mapStateToProps = (state) => ({
  values: getFormValues('registration')(state)
});

export default translate('translations')(connect(mapStateToProps, null)(ValidationForm));
