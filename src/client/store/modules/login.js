import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const LOGIN_DATA = 'login/LOGIN_DATA';
const ACCOUNT_DATA = 'login/ACCOUNT_DATA';
const COUNTRY_DATA = 'login/COUNTRY_DATA';

// action creators
export const setLoginData = createAction(LOGIN_DATA);
export const setAccountData = createAction(ACCOUNT_DATA);
export const setCountryData = createAction(COUNTRY_DATA);

// initial state
const initialState = Map({  
  login: Map ({
    login_data:'',    
    login_account:'',
    login_country:'',
  }),
});

// reducer
export default handleActions({  
  [LOGIN_DATA]: (state, action) => {
    return state.setIn(['login','login_data'], action.payload.login_data );
  },

  [ACCOUNT_DATA]: (state, action) => {
    return state.setIn(['login','login_account'], action.payload.login_account );
  },

  [COUNTRY_DATA]: (state, action) => {
    return state.setIn(['login','login_country'], action.payload.login_country );
  },

}, initialState)