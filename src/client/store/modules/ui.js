import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const MENU_DATA = 'ui/MENU_DATA';
const MOBILE_DATA = 'ui/MOBILE_DATA';
const UPLOAD_DATA = 'ui/UPLOAD_MENU_DATA';
const LOGIN_MENU_DATA = 'ui/LOGIN_MENU_DATA';

const LANGUAGE_DATA = 'ui/LANGUAGE_DATA';
const STICKER_DATA = 'ui/STICKER_DATA';
const LOGIN_MENU_LEFT = 'ui/LOGIN_MENU_LEFT';
const LOGIN_TOKEN = 'ui/LOGIN_TOKEN';
const LOGIN_EMAIL = 'ui/LOGIN_EMAIL';


// action creators
export const setMenu = createAction(MENU_DATA);
export const setMobileMenu = createAction(MOBILE_DATA);
export const setUploadMenu = createAction(UPLOAD_DATA);
export const setLoginMenu = createAction(LOGIN_MENU_DATA);

export const setLanguage = createAction(LANGUAGE_DATA);
export const setStickerMenu = createAction(STICKER_DATA);
export const setLoginMenu_Left = createAction(LOGIN_MENU_LEFT);
export const setLoginToken = createAction(LOGIN_TOKEN);
export const setLoginEmail = createAction(LOGIN_EMAIL);



// initial state
const initialState = Map({  
  ui: Map ({
    width: 0, 
    height: 0,
    menu: 0,
    mobile_menu: false,  
    upload_menu:0,
    
    login_menu:0,
    login_email:'',
    login_left:true,
    
    sticker_menu:0,
    token:'',
    language: 'eng',
  }),
});

// reducer
export default handleActions({  
  [MENU_DATA]: (state, action) => {
    return state.setIn(['ui','menu'], action.payload.menu );
  },

  [MOBILE_DATA]: (state, action) => {
    return state.setIn(['ui','mobile_menu'], action.payload.mobile_menu );
  },

  [UPLOAD_DATA]: (state, action) => {
    return state.setIn(['ui','upload_menu'], action.payload.upload_menu );
  },
  
  [LOGIN_MENU_DATA]: (state, action) => {    
    return state.setIn(['ui','login_menu'], action.payload.login_menu );
  },
  
  [LANGUAGE_DATA]: (state, action) => {
    return state.setIn(['ui','language'], action.payload.language );
  },

  [STICKER_DATA]: (state, action) => {    
    return state.setIn(['ui','sticker_menu'], action.payload.sticker_menu );
  },

  [LOGIN_MENU_LEFT]: (state, action) => {    
    return state.setIn(['ui','login_left'], action.payload.login_left );
  },

  [LOGIN_TOKEN]: (state, action) => {    
    return state.setIn(['ui','token'], action.payload.token );
  },

  [LOGIN_EMAIL]: (state, action) => {    
    return state.setIn(['ui','login_email'], action.payload.login_email );
  },
}, initialState)