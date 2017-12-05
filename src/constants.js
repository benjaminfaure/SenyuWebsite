/**
* Constantes Applicatives
*/

export const WIDTH_BREAKPOINT = 1024;
export const TYPE_EXPOSANT = [
  {
    code: "boutique",
    label: "Boutique"
  },
  {
    code: "createur",
    label: "Créateur"
  }];
export const TYPE_ANIMATION = [
  {
    code: "senyu",
    label: "Senyu"
  },
  {
    code: "culture",
    label: "Culture"
  },
  {
    code: "association",
    label: "Association"
  }];

/**
* Constantes REDUX
*/
export const RESET_MENU_STATE = 'reset menu state';

export const TOGGLE_MAIN_CONTENT = 'toggle main content';

export const UPDATE_DIMENSIONS = 'update dimensions';


/**
* Constantes intervenants
*/
export const REQUEST_INTERVENANTS = 'request intervenants';
export const RECEIVE_INTERVENANTS = 'receive intervenants';

export const REQUEST_INTERVENANT_BY_ID = 'request intervenant by id';
export const RECEIVE_INTERVENANT_BY_ID = 'receive intervenant by id';

/**
* Constantes exposants
*/
export const REQUEST_EXPOSANTS = 'request exposants';
export const RECEIVE_EXPOSANTS = 'receive exposants';

export const REQUEST_EXPOSANTS_BY_TYPE = 'request exposants by type';
export const RECEIVE_EXPOSANTS_BY_TYPE = 'receive exposants by type';

export const REQUEST_EXPOSANT_BY_ID = 'request exposant by id';
export const RECEIVE_EXPOSANT_BY_ID = 'receive exposant by id';

/**
* Constantes animations
*/
export const REQUEST_SENYU_ANIMATIONS = 'request senyu animations';
export const RECEIVE_SENYU_ANIMATIONS = 'receive senyu animations';

export const REQUEST_SENYU_ANIMATION_BY_ID = 'request senyu animation by id';
export const RECEIVE_SENYU_ANIMATION_BY_ID = 'receive senyu animation by id';


/**
* Constantes FAQ
*/
export const REQUEST_FAQ = 'request faq';
export const RECEIVE_FAQ = 'receive faq';


/**
* Constantes Twitch
*/
export const REQUEST_IS_CHANNEL_LIVE = 'request is channel live';
export const RECEIVE_IS_CHANNEL_LIVE = 'receive is channel live';
