import {
  REQUEST_ERROR_HAS_BEEN_READ,
  RECEIVE_SENYU_ANIMATIONS_ERROR,
  RECEIVE_SENYU_ANIMATION_BY_ID_ERROR,
  RECEIVE_INTERVENANTS_ERROR,
  RECEIVE_INTERVENANT_BY_ID_ERROR,
  RECEIVE_EXPOSANTS_ERROR,
  RECEIVE_EXPOSANTS_BY_TYPE_ERROR,
  RECEIVE_EXPOSANT_BY_ID_ERROR,
  RECEIVE_FAQ_ERROR,
  RECEIVE_MODELES_DE_STAND_ERROR,
  RECEIVE_REGISTRATION_SUBMIT_ERROR
} from '../constants';
import "@babel/polyfill";
import React from 'react';



const errorHandling = (state = null, action) => {
  switch (action.type) {

    /* Gestion erreur bien lue */
    case REQUEST_ERROR_HAS_BEEN_READ:
      return null;

    case RECEIVE_SENYU_ANIMATIONS_ERROR:/* Animations */
    case RECEIVE_SENYU_ANIMATION_BY_ID_ERROR: /* Exposants */
    case RECEIVE_EXPOSANTS_ERROR:
    case RECEIVE_EXPOSANTS_BY_TYPE_ERROR:
    case RECEIVE_EXPOSANT_BY_ID_ERROR: /* FAQ */
    case RECEIVE_FAQ_ERROR: /* Intervenants */
    case RECEIVE_INTERVENANTS_ERROR:
    case RECEIVE_INTERVENANT_BY_ID_ERROR:
    case RECEIVE_MODELES_DE_STAND_ERROR: /* Modeles */
      return action.error;
    /* Inscriptions */
    case RECEIVE_REGISTRATION_SUBMIT_ERROR:
      return <span> Les champs suivants ne sont pas valides :
      <ul>
        {action.error.parameterViolations ?
          action.error.parameterViolations.map((violation, i) => {
            return <li key={i}>{violation.message}</li>
          }) :
          ''}
      </ul>
    </span>

    default:
      return state;
  }
}

export default errorHandling;
