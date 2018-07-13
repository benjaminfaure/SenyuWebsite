/**
* Constantes Applicatives
*/

export const WIDTH_BREAKPOINT = 1024;
export const TYPE_EXPOSANT = [
  {
    code: "boutique"
  },
  {
    code: "createur"
  }];
export const TYPE_ANIMATION = [
  {
    code: "senyu"
  },
  {
    code: "culture"
  },
  {
    code: "association"
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
export const RECEIVE_INTERVENANTS_SUCCESS = 'receive intervenants success';
export const RECEIVE_INTERVENANTS_ERROR = 'receive intervenants error';

export const REQUEST_INTERVENANT_BY_ID = 'request intervenant by id';
export const RECEIVE_INTERVENANT_BY_ID_SUCCESS = 'receive intervenant by id success';
export const RECEIVE_INTERVENANT_BY_ID_ERROR = 'receive intervenant by id error';

/**
* Constantes exposants
*/
export const REQUEST_EXPOSANTS = 'request exposants';
export const RECEIVE_EXPOSANTS_SUCCESS = 'receive exposants success';
export const RECEIVE_EXPOSANTS_ERROR = 'receive exposants error';

export const REQUEST_EXPOSANTS_BY_TYPE = 'request exposants by type';
export const RECEIVE_EXPOSANTS_BY_TYPE_SUCCESS = 'receive exposants by type success';
export const RECEIVE_EXPOSANTS_BY_TYPE_ERROR = 'receive exposants by type error';

export const REQUEST_EXPOSANT_BY_ID = 'request exposant by id';
export const RECEIVE_EXPOSANT_BY_ID_SUCCESS = 'receive exposant by id success';
export const RECEIVE_EXPOSANT_BY_ID_ERROR = 'receive exposant by id error';

/**
* Constantes animations
*/
export const REQUEST_SENYU_ANIMATIONS = 'request senyu animations';
export const RECEIVE_SENYU_ANIMATIONS_SUCCESS = 'receive senyu animations success';
export const RECEIVE_SENYU_ANIMATIONS_ERROR = 'receive senyu animations error';

export const REQUEST_SENYU_ANIMATION_BY_ID = 'request senyu animation by id';
export const RECEIVE_SENYU_ANIMATION_BY_ID_SUCCESS = 'receive senyu animation by id success';
export const RECEIVE_SENYU_ANIMATION_BY_ID_ERROR = 'receive senyu animation by id error';


/**
* Constantes FAQ
*/
export const REQUEST_FAQ = 'request faq';
export const RECEIVE_FAQ_SUCCESS = 'receive faq success';
export const RECEIVE_FAQ_ERROR = 'receive faq error';


/**
* Constantes Twitch
*/
export const REQUEST_IS_CHANNEL_LIVE = 'request is channel live';
export const RECEIVE_IS_CHANNEL_LIVE = 'receive is channel live';


/**
* Constantes Inscriptions
*/
export const REQUEST_REGISTRATION_SUBMIT = 'request registration submit';
export const REQUEST_MODELES_DE_STAND = 'request modeles de stand';
export const RECEIVE_MODELES_DE_STAND_SUCCESS = 'receive modeles de stand success';
export const RECEIVE_MODELES_DE_STAND_ERROR = 'receive modeles de stand error';
