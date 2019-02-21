import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const ADDITIONALUSERINFO_DATA = 'ui/ADDITIONALUSERINFO_DATA';
const CREDENTIAL_DATA = 'ui/CREDENTIAL_DATA';
const USER_DATA = 'ui/USER_DATA';
const CHANNEL_DATA = 'ui/CHANNEL_DATA';

// action creators
export const setAdditionalUserInfoData = createAction(ADDITIONALUSERINFO_DATA);
export const setCredentialData = createAction(CREDENTIAL_DATA);
export const setUserData = createAction(USER_DATA);
export const setChannelData = createAction(CHANNEL_DATA);

// initial state
const initialState = Map({  
  user: Map ({
    channel: {},
    additionalUserInfo: {},
    credential: {},
    user: {},
  }),
});

// reducer
export default handleActions({  
  [ADDITIONALUSERINFO_DATA]: (state, action) => {
    return state.setIn(['user','additionalUserInfo'], action.payload.data );
  },
  [CREDENTIAL_DATA]: (state, action) => {
    return state.setIn(['user','credential'], action.payload.data );
  },
  [USER_DATA]: (state, action) => {
    return state.setIn(['user','user'], action.payload.data );
  },
  [CHANNEL_DATA]: (state, action) => {
    return state.setIn(['user','channel'], action.payload.channel );
  },
}, initialState)