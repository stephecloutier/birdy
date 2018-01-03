/* index for reducers */

import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import Auth from './Auth';

const rootReducer = combineReducers({
    Auth
});

export default rootReducer;