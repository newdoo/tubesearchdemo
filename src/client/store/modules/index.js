import { combineReducers } from 'redux';

import ui from './ui';
import login from './login';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    ui,
    login,
    pender: penderReducer
});
