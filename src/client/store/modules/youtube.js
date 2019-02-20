import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const CHANNEL_DATA = 'ui/CHANNEL_DATA';

// action creators
export const setChannelData = createAction(CHANNEL_DATA);

// initial state
const initialState = Map({  
  user: Map ({
    channel: {}, 
  }),
});

// reducer
export default handleActions({  
  [CHANNEL_DATA]: (state, action) => {
    return state.setIn(['user','channel'], action.payload.channel );
  },
}, initialState)