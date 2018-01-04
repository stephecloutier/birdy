/* index for reducers */

import {combineReducers} from 'redux';
import auth from './Auth';
import register from './Register';

const rootReducer = combineReducers({
    auth,
    register
});

export default rootReducer;