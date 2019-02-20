import { combineReducers } from 'redux';

import youtube from './youtube';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    youtube,
    pender: penderReducer
});
