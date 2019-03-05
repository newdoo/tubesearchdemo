import { combineReducers } from 'redux';

import youtube from './youtube';
import ui from './ui';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    ui,
    youtube,
    pender: penderReducer
});
