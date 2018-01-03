/* index for reducers */

import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import Auth from './Auth';

export default combineReducers({
    Auth
});
