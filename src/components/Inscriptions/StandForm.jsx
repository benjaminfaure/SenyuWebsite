import React, { Component } from 'react';
import { Field, change } from 'redux-form';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';


import {
  LIBELLE_REPARTITIONS_CLOISONS
} from '../../constants';

class StandForm extends Component {

  constructor(props) {
    super(props);
    this.handleModelesSelect = this.handleModelesSelect.bind(this);

    this.state = {
      longueurMin: 0,
      longueurMax: 10,
      pasLongueur: 0.5,
      longueurVisible: true,
      profondeurMin: 1,
      profondeurMax: 10,
      pasProfondeur: 0.5,
      profondeurVisible: true,
      nombreDeChaisesMin: 1,
      nombreDeChaisesMax: 3,
      nombreDeChaisesVisible: true,
      nombreDeTablesMin: 1,
      nombreDeTablesMax: 3,
      nombreDeTablesVisible: true,
      nombreDeBadgesMin: 1,
      nombreDeBadgesMax: 3,
      nombreDeBadgesVisible: true,
      repartitionsDesCloisonsParDefaut: "0A3CC",
      repartitionsDesCloisonsPossibles: [
        "0A3CC",
        "0A2CC",
        "1A2CC",
        "2A1CC",
        "4A0CC"
      ],
      repartitionsDesCloisonsVisible: true,
      presenceRaccordementElectriqueModifiable: false,
      presenceRaccordementElectriqueVisible: false
    }
  }

  render() {

    const { t } = this.props;

    let modelesList = this.props.modeles.map((modele) => {
      return <option value={modele.id} key={modele.id} >{modele.libelle}</option>
    });
    modelesList.unshift(<option key="none" style={{ display: "none" }}></option>)

    let cloisonRepartitionList = this.state.repartitionsDesCloisonsPossibles.map((value) => {
      return <option value={value} key={value} >{LIBELLE_REPARTITIONS_CLOISONS[value]}</option>
    });

    return (
      <div className="tab" ref="stand">
        <div className="generic-form-header">Paramétrage du stand</div>
        <div className="generic-form-body">
          <label htmlFor="modeleDeStand">
            Modèle de stand
            <span className="requiredField">*</span>
          </label>
          <Field
            component="select"
            type="text"
            onChange={this.handleModelesSelect}
            id="modeleDeStand" name="modeleDeStand" required >
            {modelesList}
          </Field>

          <div ref="parametreStand" className="parametreStand">
            <p className={this.state.longueurVisible ? '' : 'not-shown'}>
              <label htmlFor="longueur">
                Longueur désirée du stand (en mètres)
              </label>
              <Field
                component="input"
                step={this.state.pasLongueur}
                min={this.state.longueurMin}
                max={this.state.longueurMax}
                type="number" ref="longueur"
                id="longueur" name="longueur" />
            </p>
            <p className={this.state.profondeurVisible ? '' : 'not-shown'}>
              <label htmlFor="profondeur">
                Profondeur désirée du stand (en mètres)
              </label>
              <Field
                component="input"
                step={this.state.pasProfondeur}
                min={this.state.profondeurMin}
                max={this.state.profondeurMax}
                type="number" ref="profondeur"
                id="profondeur" name="profondeur" />
            </p>

            <p className={this.state.nombreDeChaisesVisible ? '' : 'not-shown'}>
              <label htmlFor="nombreDeChaises">
                Nombre de chaises désirées sur le stand
              </label>
              <Field
                component="input"
                min={this.state.nombreDeChaisesMin}
                max={this.state.nombreDeChaisesMax}
                type="number" ref="nombreDeChaises"
                id="nombreDeChaises" name="nombreDeChaises" />
            </p>

            <p className={this.state.nombreDeTablesVisible ? '' : 'not-shown'}>
              <label htmlFor="nombreDeTables">
                Nombre de tables désirées sur le stand
              </label>
              <Field
                component="input"
                min={this.state.nombreDeTablesMin}
                max={this.state.nombreDeTablesMax}
                type="number" ref="nombreDeTables"
                id="nombreDeTables" name="nombreDeTables" />
            </p>

            <p className={this.state.nombreDeBadgesVisible ? '' : 'not-shown'}>
              <label htmlFor="nombreDeBadges">
                Nombre de badges à éditer
              </label>
              <Field
                component="input"
                min={this.state.nombreDeBadgesMin}
                max={this.state.nombreDeBadgesMax}
                type="number" ref="nombreDeBadges"
                id="nombreDeBadges" name="nombreDeBadges" />
            </p>

            <p className={this.state.repartitionsDesCloisonsVisible ? '' : 'not-shown'}>
              <label htmlFor="repartitionsDesCloisons">
                Répartition des cloisons
              </label>
              <Field
                component="select"
                type="text"
                id="repartitionsDesCloisons" name="repartitionsDesCloisons" required >
                {cloisonRepartitionList}
              </Field>
            </p>

            <p className={this.state.presenceRaccordementElectriqueVisible ? '' : 'not-shown'}>
              <label htmlFor="raccordementElectriquePresent">
                Raccordement électrique présent
              </label>
              <Field
                component="input"
                disabled={this.state.presenceRaccordementElectriqueModifiable ? false : true}
                type="checkbox" ref="raccordementElectriquePresent"
                id="raccordementElectriquePresent" name="raccordementElectriquePresent" />
            </p>

            <label htmlFor="dossierInscriptionPrisEnCompte">
              Je certifie avoir pris connaissance du dossier d’inscription
            </label>
            <Field
              component="input"
              type="checkbox"
              id="dossierInscriptionPrisEnCompte" name="dossierInscriptionPrisEnCompte" />
          </div>
        </div>
      </div>


    );

  }


  handleModelesSelect(e) {
    let modeleId = e.target.value;
    let modele = this.props.modeles.find((item) => parseInt(item.id, 10) === parseInt(modeleId, 10));

    if (modele) {
      this.setState(modele)
      this.props.changeFieldValue('longueur', modele.longueurParDefaut);
      this.props.changeFieldValue('profondeur', modele.profondeurParDefaut);
      this.props.changeFieldValue('nombreDeChaises', modele.nombreDeChaisesParDefaut);
      this.props.changeFieldValue('nombreDeTables', modele.nombreDeTablesParDefaut);
      this.props.changeFieldValue('nombreDeBadges', modele.nombreDeBadgesParDefaut);
      this.props.changeFieldValue('repartitionsDesCloisons', modele.repartitionsDesCloisonsParDefaut);
      this.props.changeFieldValue('raccordementElectriquePresent', modele.raccordementElectriquePresentParDefaut);
      this.refs["parametreStand"].style.display = "block";
    }
  }

}

const mapDispatchToProps = (dispatch) => (
  {
    changeFieldValue: (fieldName, value) => dispatch(change('registration', fieldName, value))
  }
);

export default translate('translations')(connect(null, mapDispatchToProps)(StandForm));
